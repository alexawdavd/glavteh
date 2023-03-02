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
import {useNavigate} from "react-router";

const NavBar = observer(() => {
    const {journal} = useContext(Context)
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
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
                        <Nav.Link href={MAIN_ROUTE}>Главная</Nav.Link>
                        <Nav.Link href="#action2">Выпуски</Nav.Link>
                        <NavDropdown title="Разделы" className={"pe-1 ps-1"} id="navbarScrollingDropdown">
                            {journal.types.map(type =>
                                <ListGroup.Item
                                    className={"pb-3 ps-2 pe-1 me-3 ms-3 mt-1"}
                                    style={{cursor: 'pointer', lineHeight: "1.1"}}
                                    onClick={() => journal.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </ListGroup.Item>

                            )}
                            <NavDropdown.Divider />
                            <NavDropdown.Item href={SHOP_ROUTE}>
                                Все разделы
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action2">Конференции</Nav.Link>
                        <Nav.Link href="#action2">Новости</Nav.Link>
                        <NavDropdown title={"Другое"}>
                            <ListGroup.Item className={"pb-3 ps-2 pe-1 me-3 ms-3 mt-1"}>Компании</ListGroup.Item>
                            <ListGroup.Item className={"pb-3 ps-2 pe-1 me-3 ms-3 mt-1"}>Тренинги</ListGroup.Item>
                            <ListGroup.Item className={"pb-3 ps-2 pe-1 me-3 ms-3 mt-1"}>Подписка</ListGroup.Item>
                            <ListGroup.Item className={"pb-3 ps-2 pe-1 me-3 ms-3 mt-1"}>Авторы</ListGroup.Item>
                        </NavDropdown>
                    </Nav>

                    <Row>
                        <Nav.Link className={"me-4"} href="mailto: super.bulhi@yandex.ru">info@glavteh.ru</Nav.Link>
                        <Nav.Link className={"me-4"} href="tel:">+7 (495) 371-01-74</Nav.Link>
                    </Row>


                    {user.isAuth ?
                        <Nav>
                            <Button
                                className={"me-2 mb-2"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                            >Админ панель</Button>
                            <Button
                                className={"me-4 mb-2"}
                                onClick={() => logOut()}
                            >Выйти</Button>
                        </Nav>
                        :
                        <Nav>
                            <Button className={"me-4 mb-2"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                        </Nav>
                    }


                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Введите текст..."
                            className="me-2 mb-2"
                            aria-label="Search"
                        />
                        <Button className="me-2 mb-2" variant="outline-success">Найти</Button>
                    </Form>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
});

export default NavBar;