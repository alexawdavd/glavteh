import React from 'react';
import {Card, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {LOGIN_ROUTE, REG_ROUTE} from "../utils/consts";
import {useLocation, NavLink} from "react-router-dom";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h2>{isLogin ? 'Авторизация': 'Регистрация'}</h2>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Row className="d-flex justify-content-between mt-3">
                    {isLogin ?
                        <div>Нет аккаунта? <NavLink to={REG_ROUTE}>Зарегистрируйся!</NavLink> </div>
                        :
                        <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink> </div>
                    }

                    {isLogin ?
                        <Button variant="primary" type="submit" className="mt-3 align-self-end">Войти</Button>
                        :
                        <Button variant="primary" type="submit" className="mt-3 align-self-end">Зарегистрироваться</Button>
                    }

                </Row>
            </Form>
        </Card>

        </Container>
    );
};

export default Auth;