import React, {useContext, useState} from 'react';
import {Card, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import {LOGIN_ROUTE, REG_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {useLocation, NavLink, useHistory} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if (isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
                console.log(data)
            }
            user.setUser(user)
            user.setIsAuth(true)
            history.push(SHOP_ROUTE)
        } catch (e){
            alert(e.response.data.message)
        }


    }

    return (
        <Container className="d-flex justify-content-center align-items-center" style={{height: window.innerHeight - 54}}>
        <Card style={{width: 600}} className="p-5">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <h2>{isLogin ? 'Авторизация': 'Регистрация'}</h2>
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control value={email} onChange={e => setEmail(e.target.value)} type="email" placeholder="Введите email" />
                    <Form.Text className="text-muted">
                        Мы никому не отправим вашу электронный адрес
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
                </Form.Group>

                <Row className="d-flex justify-content-between mt-3">
                    {isLogin ?
                        <div>Нет аккаунта? <NavLink to={REG_ROUTE}>Зарегистрируйся!</NavLink> </div>
                        :
                        <div>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink> </div>
                    }

                        <Button onClick={click} variant="primary" className="mt-3 align-self-end">{isLogin ? 'Войти' : 'Регистрация'}</Button>

                </Row>
            </Form>
        </Card>

        </Container>
    );
});

export default Auth;