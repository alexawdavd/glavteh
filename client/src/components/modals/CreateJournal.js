import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, FormText, InputGroup, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";
import {useEffect} from "react";
import {createJournal, fetchTypes} from "../../http/journalAPI";
import {observer} from "mobx-react-lite";

const CreateJournal = observer(({show, onHide}) => {
    const {journal} = useContext(Context)
    const [info, setInfo] = useState([])
    const [numOfJournal, setNumOfJournal] = useState()
    const [year, setYear] = useState()
    const [price, setPrice] = useState()
    const [file, setFile] = useState(null)
    const [description, setDescription] = useState('')
    const [numOfPages, setNumOfPages] = useState()

    useEffect(() =>{
        fetchTypes().then(data => journal.setTypes(data))
    }, [])
    const addInfo = () => {
        setInfo([...info, {title: "", description: "", number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addJournal = () => {
        const formData = new FormData()
        formData.append('typeId', journal.selectedType.id)
        formData.append('numOfJournal', numOfJournal)
        formData.append('year', year)
        formData.append('price', price)
        formData.append('img', file)
        formData.append('description', description)
        formData.append('numOfPages', numOfPages)
        formData.append('info', JSON.stringify(info))
        console.log(formData)
        createJournal(formData).then(data => onHide())
    }

    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >

                <Modal.Header closeButton>
                    <Modal.Title>Создать журнал</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FormText>Раздел журнала</FormText>
                        <Dropdown className={"mt-2"} >
                            <DropdownToggle  variant={"outline-dark"}>{journal.selectedType.name || 'Выберите раздел'}</DropdownToggle>
                            <DropdownMenu>
                                {journal.types.map(type =>
                                    <Dropdown.Item onClick={() => {journal.setSelectedType(type);}} key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <FormText>Номер журнала</FormText>
                        <FormControl value={numOfJournal || 0} onChange={e => setNumOfJournal(e.target.value)} type="number" className={"mt-2"}  />
                        <FormText>Год выпуска</FormText>
                        <FormControl value={year || 0} onChange={e => setYear(e.target.value)} type="number" className={"mt-2"} />
                        <FormText>Цена</FormText>
                        <FormControl value={price || 0} onChange={e => setPrice(e.target.value)} className={"mt-2"}/>
                        <FormText>Фото обложки</FormText>
                        <FormControl value={file || ""} onChange={e => setFile(e.target.value)} type="file" className={"mt-2"} onClick={selectFile}/>
                        <FormText>Описание журнала</FormText>
                        <InputGroup className={"mt-1 mb-2"}>
                            <InputGroup.Text>Описание</InputGroup.Text>
                            <Form.Control value={description || ""} onChange={e => setFile(e.target.value)} as="textarea" aria-label="With textarea" />
                        </InputGroup>
                        <FormText>Количество страниц</FormText>
                        <FormControl value={numOfPages || 0} onChange={e => setNumOfPages(e.target.value)} type="number" className={"mt-2"}/>
                        <hr/>

                        <Button
                        variant="outline-primary"
                        onClick={addInfo}
                        >Добавить новое свойство</Button>

                        {info.map(i =>
                            <Row className={"mt-2"} key={i.number}>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.title}
                                        placeholder="Название нового свойства"
                                        onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Form.Control
                                        value={i.description}
                                        placeholder="Введите описание"
                                        onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    />
                                </Col>
                                <Col md={4}>
                                    <Button onClick={() => removeInfo(i.number)} variant={"danger"}>Удалить</Button>
                                </Col>
                            </Row>
                            )}

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={addJournal}>Добавить</Button>
                </Modal.Footer>

        </Modal>
    );
});

export default CreateJournal;