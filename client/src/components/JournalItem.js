import React from 'react';
import {Card, Col, Image} from "react-bootstrap";
import {JOURNAL_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router";

const JournalItem = ({journal}) => {
    const navigate = useNavigate()
    return (
        <Col className={"mb-5"} ma={4} onClick={() => navigate(JOURNAL_ROUTE + '/' + journal.id)}>
            <Card style={{width: 300, cursor: 'pointer', position: "relative"}} border={"light"}>
                <Image className={"mb-2"} width={300} height={400} src={process.env.REACT_APP_API_URL + journal.img}/>
                <Card.Title>Выпуск №{journal.numOfJournal}/{journal.year}</Card.Title>
                <Card.Text>{journal.description}</Card.Text>
                <Card.Subtitle>Подробнее</Card.Subtitle>

            </Card>
        </Col>
    );
};

export default JournalItem;