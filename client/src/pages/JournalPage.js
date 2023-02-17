import React, {useEffect, useState} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Image, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import {useParams} from 'react-router-dom'
import {fetchOneJournal} from "../http/journalAPI";

const JournalPage = observer(() => {
    const [journal, setJournal] = useState({info: []})
    const {id} = useParams()

    useEffect(() => {
        fetchOneJournal(id).then(data => setJournal(data))
    }, [])

        return (
        <Container className="mt-5">
            <Row>
                <Col md={3}>
                    <Image width={300} height={400} src={process.env.REACT_APP_API_URL + journal.img}/>
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
                        {journal.info.map(info =>
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