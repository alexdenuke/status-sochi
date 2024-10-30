import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import interOne from "../Asserts/interOne.jpg";

function Slaider() {
  return (
    <Carousel className="fixednon">
      <Carousel.Item interval={1000} style={{ height: "500px" }}>
        <img src={interOne} alt="komnata" text="First slide" />
        <Carousel.Caption>
          <h2>STATUS</h2>
          <h4 className="">
            Мы сочетаем функциональность и эстетику, и создаем гармонию и стиль
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style={{ height: "500px" }}>
        <img src={interOne} alt="komnata" text="Second slide" />
        <Carousel.Caption>
          <h2>STATUS</h2>
          <h4>
            Создайте пространство, в котором каждый элемент будет отражать вашу
            индивидуальность
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "500px" }}>
        <img src={interOne} alt="komnata" text="Third slide" />
        <Carousel.Caption>
          <h2>STATUS</h2>
          <h4>
            Закажите дизайн проект уже сегодня и наслаждайтесь качеством и
            комфортом жизни.
          </h4>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slaider;
