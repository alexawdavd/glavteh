import React, {useState} from 'react';
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import {observer} from "mobx-react-lite";
import CreateJournal from "../components/modals/CreateJournal";
import CreateType from "../components/modals/CreateType";

const Admin = observer(() => {
    const [journalVisible, setJournalVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)

    return (
        <Container className={"d-flex flex-column"}>

            <Button
                onClick={() => setTypeVisible(true)}
                variant={"outline-dark"}
                className={"mt-2 p-3"}
            >Добавить раздел</Button>

            <Button
                onClick={() => setJournalVisible(true)}
                variant={"outline-dark"}
                className={"mt-2 p-3"}
            >Добавить журнал</Button>

            <CreateJournal show={journalVisible} onHide={() => setJournalVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>

        </Container>
    );
});

export default Admin;