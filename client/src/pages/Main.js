import React from 'react';
import Container from "react-bootstrap/Container";
import MainSlider from "../components/MainSlider";
import JournalSlider from "../components/JournalSlider";
import MainNewsBlock from "../components/MainNewsBlock";
import {Col, Row} from "react-bootstrap";

const Main = () => {
    return (

        <Container fluid className="pe-0 ps-0">
            <MainSlider/>
            <JournalSlider/>
            <div style={{backgroundColor: "#111111", color: "white"}}>
                <MainNewsBlock/>
            </div>

        </Container>
    );
};

export default Main;