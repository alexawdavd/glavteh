import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Image, ListGroup, Row} from "react-bootstrap";
import React, {useContext} from 'react';
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import logo from "../assets/logo.png"
import {useHistory} from "react-router-dom";

const NavBar = observer(() => {
    const {journal} = useContext(Context)
    const {user} = useContext(Context)
    const history = useHistory()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="light" expand="lg" className="pt-3 pb-3">
            <Container fluid className="pe-5 ps-5">
                <Navbar.Brand href="#">
                    <Image style={{maxHeight: 50}} src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '150px' }}
                        navbarScroll
                    >
                        <Nav.Link to={MAIN_ROUTE}>Главная</Nav.Link>
                        <Nav.Link href="#action2">Выпуски</Nav.Link>
                        <NavDropdown title="Разделы" className={"pe-1 ps-1"} id="navbarScrollingDropdown">
                            {journal.types.map(type =>
                                <ListGroup.Item
                                    className={"pb-2"}
                                    style={{cursor: 'pointer', lineHeight: "1.1"}}
                                    onClick={() => journal.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </ListGroup.Item>

                            )}
                            <NavDropdown.Divider />
                            <NavDropdown.Item to={SHOP_ROUTE}>
                                Все разделы
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Авторы</Nav.Link>
                        <Nav.Link href="#action2">Компании</Nav.Link>
                        <Nav.Link href="#action2">Конференции</Nav.Link>
                        <Nav.Link href="#action2">Тренинги</Nav.Link>
                        <Nav.Link href="#action2">Новости</Nav.Link>
                        <Nav.Link href="#action2">Подписка</Nav.Link>
                    </Nav>

                    <Row>
                        <Nav.Link className={"me-4"} href="mailto: super.bulhi@yandex.ru">pochta@hahahah.cpm</Nav.Link>
                        <Nav.Link className={"me-4"} href="tel:">88005553535</Nav.Link>
                    </Row>


                    {user.isAuth ?
                        <Nav>
                            <Button
                                className={"me-2"}
                                onClick={() => history.push(ADMIN_ROUTE)}
                            >Админ панель</Button>
                            <Button
                                className={"me-4"}
                                onClick={() => logOut()}
                            >Выйти</Button>
                        </Nav>
                        :
                        <Nav>
                            <Button className={"me-4"} onClick={() => history.push(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }


                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Введите текст..."
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Найти</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;