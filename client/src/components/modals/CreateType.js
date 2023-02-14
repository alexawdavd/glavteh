import React from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";

const CreateType = ({show, onHide}) => {
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
                        <FormControl placeholder={"Введите название раздела"}/>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Добавить</Button>
                </Modal.Footer>

        </Modal>
    );
};

export default CreateType;