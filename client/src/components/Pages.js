import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Pagination} from "react-bootstrap";

const Pages = observer(() => {

    const {journal} = useContext(Context)
    const pageCount = Math.ceil(journal.totalCount / journal.limit)
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }


    return (
        <Pagination className={"mt-5"}>
            {pages.map(page =>
                <Pagination.Item
                key={page}
                active={journal.page === page}
                onClick={() => journal.setPage(page)}
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;