import Carousel from 'react-bootstrap/Carousel';
import photo1 from '../assets/photo_2023-02-14_06-30-27.jpg'
import photo2 from '../assets/photo_2023-02-14_07-53-33.jpg'
import photo3 from '../assets/photo_2023-02-14_14-04-07.jpg'
import Button from "react-bootstrap/Button";
import CreateRegisterOnConf from "./modals/CreateRegisterOnConf";
import {useState} from "react";
import React from "react";


function IndividualIntervalsExample() {
    const interval = 6000;
    const height = 700;
    const [regOnConf, setRegOnConf] = useState(false)
    return (
        <Carousel>
            <Carousel.Item interval={interval} style={{backgroundColor: "black"}}>
                <img
                    className="d-block w-100"
                    style={{objectFit: "cover", height: height, opacity: 0.6, blur: 0.1}}
                    src={photo1}
                    alt="First slide"
                />

                <Carousel.Caption>
                    <h2>ТРУБОПРОВОДЫ ’2023</h2>
                    <h4>Состояние и перспективы развития трубного рынка для обеспечения нефтегазового комплекса.</h4>
                    <p>21-23 марта 2023 года, г. Челябинск</p>
                    <Button onClick={() => setRegOnConf(true)} variant={"light"} className={"me-2 mb-2"} size={"lg"}>Зарегистрироваться</Button>
                    <CreateRegisterOnConf show={regOnConf} onHide={() => setRegOnConf(false)}/>
                    <Button variant={"outline-light"} className={"mb-2"} size={"lg"}>Информация</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval} style={{backgroundColor: "black"}}>
                <img
                    style={{objectFit: "cover", height: height, opacity: 0.6}}
                    className="d-block w-100"
                    src={photo2}
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h2>ТРУБОПРОВОДЫ ’2023</h2>
                    <h4>Состояние и перспективы развития трубного рынка для обеспечения нефтегазового комплекса.</h4>
                    <p>21-23 марта 2023 года, г. Челябинск</p>
                    <Button variant={"light"} className={"me-2 mb-2"} size={"lg"}>Зарегистрироваться</Button>
                    <Button variant={"outline-light"} className={"mb-2"} size={"lg"}>Информация</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={interval} style={{backgroundColor: "black"}}>
                <img
                    style={{objectFit: "cover", height: height, opacity: 0.6}}
                    className="d-block w-100"
                    src={photo3}
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h2>ТРУБОПРОВОДЫ ’2023</h2>
                    <h4>Состояние и перспективы развития трубного рынка для обеспечения нефтегазового комплекса.</h4>
                    <p>21-23 марта 2023 года, г. Челябинск</p>
                    <Button variant={"light"} className={"me-2 mb-2"} size={"lg"}>Зарегистрироваться</Button>
                    <Button variant={"outline-light"} className={"mb-2"} size={"lg"}>Информация</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;