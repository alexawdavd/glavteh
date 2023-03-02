import React, {useEffect} from 'react';
import {SwiperSlide, Swiper} from "swiper/react";
import {FreeMode} from "swiper";
import 'swiper/css'
import "swiper/css/free-mode"
import JournalItem from "./JournalItem";
import {useContext} from "react";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {fetchJournals, fetchTypes} from "../http/journalAPI";

const JournalSlider = observer(() => {

    useEffect(() =>{
        fetchTypes().then(data => journal.setTypes(data))
        fetchJournals().then(data => {
            journal.setJournals(data.rows)
            journal.setTotalCount(data.count)
        })
    }, [])

    const {journal} = useContext(Context)

    return (
        <div className="container py-4 px-4 justify-content-center mt-5">
            <h1>Последние выпуски:</h1>
            <Swiper
            freeMode={true}
            grabCursor={true}
            modules={[FreeMode]}
            className="mySwiper mt-4"
            breakpoints={{
                0: {
                    slidesPerView: 1.1,
                    spaceBetween: 10
                },
                480: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                768: {
                        slidesPerView: 2.2,
                        spaceBetween: 15
                    },
                1280: {
                    slidesPerView: 3.2,
                    spaceBetween: 30
                },
            }}
            >

                {journal.journals.map(journal =>
                        <SwiperSlide>
                            <JournalItem key={journal.id} journal={journal}/>
                        </SwiperSlide>
                    )}
            </Swiper>

        </div>
    );
});

export default JournalSlider;