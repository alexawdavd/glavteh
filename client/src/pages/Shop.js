import React, {useContext, useEffect} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import TypeBar from "../components/TypeBar";
import JournalList from "../components/JournalList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchJournals, fetchTypes} from "../http/journalAPI";

const Shop = observer(() => {
    const {journal} = useContext(Context)

    useEffect(() =>{
        fetchTypes().then(data => journal.setTypes(data))
        fetchJournals().then(data => journal.setJournals(data.rows))
    }, [])

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
});

export default Shop;