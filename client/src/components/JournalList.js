import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import JournalItem from "./JournalItem";

const JournalList = observer(() => {
    const {journal} = useContext(Context)
    return (
        <Row className="">
            {journal.journals.map(journal =>
                <JournalItem key={journal.id} journal={journal}/>
            )}
        </Row>
    );
});

export default JournalList;