import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import {createType} from "../../http/journalAPI";

const CreateType = ({show, onHide}) => {

    const [value, setValue] = useState('')
    const addType = () => {
        createType({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >

                <Modal.Header closeButton>
                    <Modal.Title>Создать раздел</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <FormControl
                            value={value}
                            onChange={event => setValue(event.target.value)}
                            placeholder={"Введите название раздела"}/>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={addType}>Добавить</Button>
                </Modal.Footer>

        </Modal>
    );
};

export default CreateType;