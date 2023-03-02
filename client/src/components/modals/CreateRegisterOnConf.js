import Form from 'react-bootstrap/Form';
import {Button, FormControl, Modal} from "react-bootstrap";
import React from "react";


function CreateRegisterOnConf({show, onHide}) {


    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >

            <Modal.Header closeButton>
                <Modal.Title>Запись на конференцию</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <FormControl
                        className={"mb-3"}
                        placeholder={"Введите ваше имя"}/>
                    <FormControl
                        placeholder={"Введите ваш номер телефона"}/>

                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-success" style={{align: "auto", width: "auto"}}>Отправить заявку</Button>
            </Modal.Footer>

        </Modal>
    );
}

export default CreateRegisterOnConf;