import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";

const JournalPage = observer(() => {
    const journal = {id: 1, name: 'Выпуск №10', price: 1000, img: 'https://glavteh.ru/wp-content/uploads/2023/01/screenshot-at-jan-31-12-34-05-300x398.png', description: "Внедрение АПК с элементами предиктивной аналитики\n" +
            "Автоматизация проведения ГДИС в режиме реального времени\n" +
            "Проведение селективной ОПЗ\n" +
            "Снижение импортозависимости нефтегазовых проектов в области арматуры\n" +
            "Разработка импортозамещающего оборудования. Обратный инжиниринг\n" +
            "Совершенствование устьевой арматуры для ОРЭ", numOfPages: 123, numOfJournal: 99, year: 2022}
    const description = [
        {id: 1, title: 'Титл', description: 'Описаниеописаниеописание описание описание описаниеописание'},
        {id: 1, title: 'Титл1', description: 'Описаниеописаниеописание описание опи описаниеописание'},
        {id: 1, title: 'Титл2', description: 'Описаниеописаниеописание описание описание'}
    ]

        return (
        <Container className="mt-5">
            <Row>
                <Col md={3}>
                    <Image width={300} height={400} src={journal.img}/>
                </Col>

                <Col md={5}>
                    <h2>{journal.name}/{journal.year}</h2>
                    <h5>{journal.description}</h5>
                    <div className={"mt-4"}>
                        <h6>Цена: {journal.price}</h6>
                        <h6>Количество страниц: {journal.numOfPages}</h6>

                    </div>

                    <Row className={"d-flex align-items-center"}>
                        <Button>Оформить подписку</Button>
                        <div>или</div>
                        <Button variant={"secondary"}>Заказать выпуск</Button>
                    </Row>

                </Col>

                <Col md={4}>
                    <Row className={"d-flex flex-column mt-4 ms-3"}>
                        {description.map(info =>
                            <Row key={info.id} className={"mb-3"}>
                                {info.title}: {info.description}
                            </Row>
                        )}
                    </Row>
                </Col>
            </Row>
        </Container>
    );
});

export default JournalPage;