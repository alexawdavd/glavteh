import React from 'react';
import Container from "react-bootstrap/Container";
import {Card, Col, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import photo1 from "../assets/Rectangle20.jpg"
import photo2 from "../assets/Rectangle21.png"
import photo3 from "../assets/Rectangle22.png"

const MainNewsBlock = () => {
    return (
        <Container>

            <Row >
                <Col className={"mt-4"}>
                    <h1>Свежие новости</h1>
                </Col>
            </Row>

            <Row className={"mt-4"}>
                <Col>
                    <Image style={{width: "inherit"}} src={photo1} />
                    <div>08.01.2023</div>
                    <div style={{fontSize: "x-large"}} className={"fw-bold mt-2"}>Плановые ремонты завершены на инфраструктурных объектах АО «Транснефть – Сибирь» в трех регионах</div>
                    <div className={"mt-1"}>Мероприятия выполнялись на территории Тюменской и Свердловской областей, а также Ханты-Мансийского автономного округа-Югры</div>
                    <div style={{color: "rgb(108,138,255)"}}>#газ #ремонт #газпром #челябинск #защитныепокрытия</div>
                    <div className={"mt-2 text-decoration-underline"}>Подробнее</div>
                </Col>
                <Col>
                    <Row>
                        <Col>
                            <Image style={{width: "auto"}} src={photo2} />
                        </Col>
                        <Col>
                            <div>08.01.2023</div>
                            <div style={{fontSize: "large"}} className={"fw-bold mt-2"}>Плановые ремонты завершены на инфраструктурных объектах АО «Транснефть – Сибирь» в трех регионах</div>
                            <div style={{color: "rgb(108,138,255)"}}>#газ #ремонт #газпром #челябинск #защитныепокрытия</div>
                            <div className={"mt-2 text-decoration-underline"}>Подробнее</div>
                        </Col>
                        <hr className={"mt-2 ms-2"}/>
                    </Row>
                    <Row>
                        <Col>
                            <Image style={{width: "auto"}} src={photo3} />
                        </Col>
                        <Col>
                            <div>08.01.2023</div>
                            <div style={{fontSize: "large"}} className={"fw-bold mt-2"}>Плановые ремонты завершены на инфраструктурных объектах АО «Транснефть – Сибирь» в трех регионах</div>
                            <div style={{color: "rgb(108,138,255)"}}>#газ #ремонт #газпром #челябинск #защитныепокрытия</div>
                            <div className={"mt-2 text-decoration-underline"}>Подробнее</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <h3 className={"mt-5 text-center text-decoration-underline pb-5"}>Все новости</h3>
        </Container>
    );
};

export default MainNewsBlock;