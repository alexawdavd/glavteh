import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";

const JournalPage = () => {
    const journal = {id: 1, name: 'Выпуск №10/2022', price: 1000, img: 'https://glavteh.ru/wp-content/uploads/2023/01/screenshot-at-jan-31-12-34-05-300x398.png', description: "Внедрение АПК с элементами предиктивной аналитики\n" +
            "Автоматизация проведения ГДИС в режиме реального времени\n" +
            "Проведение селективной ОПЗ\n" +
            "Снижение импортозависимости нефтегазовых проектов в области арматуры\n" +
            "Разработка импортозамещающего оборудования. Обратный инжиниринг\n" +
            "Совершенствование устьевой арматуры для ОРЭ", numOfPages: 123, numOfJournal: 99, year: 2022}

        return (
        <Container className="mt-5">
            <Row>
                <Col md={3}>
                    <Image width={300} height={400} src={journal.img}/>
                </Col>

                <Col md={5}>
                    <h2>{journal.name}</h2>
                    <h5>{journal.description}</h5>
                    <div className="bottom-0">
                        <h6>Цена: {journal.price}</h6>
                        <h6>Количество страниц: {journal.numOfPages}</h6>
                    </div>

                </Col>

                <Col md={3}>
                    <Row className={"d-flex align-items-center"}>
                            <Button>Оформить подписку</Button>
                            <div>или</div>
                            <Button variant={"secondary"}>Заказать выпуск</Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};

export default JournalPage;