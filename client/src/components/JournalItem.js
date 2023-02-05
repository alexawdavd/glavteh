import React from 'react';
import {Card, Col, Image} from "react-bootstrap";

const JournalItem = ({journal}) => {
    return (
        <Col className={"mb-5"} ma={4}>
            <Card style={{width: 300, cursor: 'pointer', position: "relative"}} border={"light"}>
                <Image className={"mb-2"} width={300} height={400} src={journal.img}/>

                <Card.Title>Выпуск №10/2022</Card.Title>
                <Card.Text>Внедрение АПК с элементами предиктивной аналитики. Автоматизация проведения ГДИС в режиме реального времени. Проведение селективной ОПЗ</Card.Text>
                <Card.Subtitle>Подробнее</Card.Subtitle>

            </Card>
        </Col>
    );
};

export default JournalItem;