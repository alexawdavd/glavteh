import React, {useContext, useState} from 'react';
import {Button, Col, Dropdown, Form, FormControl, Modal, Row} from "react-bootstrap";
import {Context} from "../../index";
import DropdownToggle from "react-bootstrap/DropdownToggle";
import DropdownMenu from "react-bootstrap/DropdownMenu";

const CreateJournal = ({show, onHide}) => {
    const {journal} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: "", description: "", number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
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
                        <FormControl placeholder={"Введите название журнала"}/>
                        <Dropdown className={"mt-2"}>
                            <DropdownToggle variant={"outline-dark"}>Выберите раздел</DropdownToggle>
                            <DropdownMenu>
                                {journal.types.map(type =>
                                    <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                                )}
                            </DropdownMenu>
                        </Dropdown>
                        <FormControl type="number" className={"mt-2"} placeholder={"Номер журнала"}/>
                        <FormControl type="number" className={"mt-2"} placeholder={"Год"}/>
                        <FormControl className={"mt-2"} placeholder={"Цена"}/>
                        <FormControl type="file" className={"mt-2"} placeholder={"Изображение"}/>
                        <FormControl className={"mt-2"} placeholder={"Описание"}/>
                        <FormControl type="number" className={"mt-2"} placeholder={"Кол-во страниц"}/>
                        <hr/>

                        <Button
                        variant="outline-primary"
                        onClick={addInfo}
                        >Добавить новое свойство</Button>

                        {info.map(i =>
                            <Row className={"mt-2"} key={i.number}>
                                <Col md={4}>
                                    <Form.Control placeholder="Название нового свойства"/>
                                </Col>
                                <Col md={4}>
                                    <Form.Control placeholder="Введите описание"/>
                                </Col>
                                <Col md={4}>
                                    <Button onClick={() => removeInfo(i.number)} variant={"danger"}>Удалить</Button>
                                </Col>
                            </Row>
                            )}

                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Добавить</Button>
                </Modal.Footer>

        </Modal>
    );
};

export default CreateJournal;