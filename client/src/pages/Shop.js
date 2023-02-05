import React from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import JournalList from "../components/JournalList";

const Shop = () => {
    return (
        <Container className={"mt-4"}>
            <Row>
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <JournalList/>
                </Col>
            </Row>
        </Container>
    );
};

export default Shop;