import styled from "styled-components";
import { Container, Col, Row, Carousel } from "react-bootstrap";
import React from "react";
import "../App.css";

import PortfolOne from "../Asserts/portfolOne.jpg";
import PortfolTwo from "../Asserts/portfolTwo.jpg";
import PortfolTre from "../Asserts/portfolTre.jpg";
import portfolFour from "../Asserts/portfolFour.jpg";
import PortfolFive from "../Asserts/PortfolFive.jpg";
import PortfolSix from "../Asserts/PortfolSix.jpg";

import ssa from "../Asserts/ssa.jpg";
import ssb from "../Asserts/ssb.jpg";
import sscc from "../Asserts/sscc.jpg";
import ssd from "../Asserts/ssd.jpg";
import sse from "../Asserts/sse.jpg";
import ssf from "../Asserts/ssf.jpg";

import kka from "../Asserts/kka.jpg";
import kkb from "../Asserts/kka.jpg";
import kkc from "../Asserts/kkc.jpg";
import kkd from "../Asserts/kkd.jpg";
import kke from "../Asserts/kke.jpg";
import kkf from "../Asserts/kkf.jpg";

import ffa from "../Asserts/ffa.jpg";
import ffb from "../Asserts/ffa.jpg";
import ffc from "../Asserts/ffc.jpg";
import ffd from "../Asserts/ffd.jpg";
import ffe from "../Asserts/ffe.jpg";
import fff from "../Asserts/fff.jpg";

const Styles = styled.div`
  h2,
  h3,
  h4,
  h5,
  p,
  li,
  ul {
    color: white;
  }
  a {
    padding: 6px;
    text-decoration: none;
    color: white;
    font-size: 20px;
  }

  a:hover {
    color: black;
  }
`;

function Portfolio() {
  return (
    <>
      <Container style={{ marginBottom: "30px" }} >
        <Styles>
          <h4 className="text-center pt-3 py-2">ЖК Морской квартал</h4>{" "}
        </Styles>
        <Row>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={PortfolOne} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={PortfolTwo} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={PortfolTre} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={portfolFour} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={PortfolFive} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={PortfolSix} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "30px" }}>
        <Styles>
          <h4 className="text-center pt-3 py-2">ЖК на Ясногорской</h4>{" "}
        </Styles>
        <Row>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={ssa} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={ssb} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={sscc} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={ssd} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={sse} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={ssf} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "30px" }}>
        <Styles>
          <h4 className="text-center pt-3 py-2">Частный дом в Сочи</h4>{" "}
        </Styles>
        <Row>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={kka} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={kkb} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={kkc} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={kkd} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={kke} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={kkf} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>

      <Container style={{ marginBottom: "30px" }} >
        <Styles>
          <h4 className="text-center pt-3 py-2">ЖК Фрукты Сириус</h4>{" "}
        </Styles>
        <Row>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={ffa} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={ffb} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={ffc} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col md={6}>
            <Carousel style={{ marginBottom: "20px" }}>
              <Carousel.Item interval={1000} style={{ height: "500px" }}>
                <img src={ffd} alt="komnata" text="First slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={500} style={{ height: "500px" }}>
                <img src={ffe} alt="komnata" text="Second slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item style={{ height: "500px" }}>
                <img src={fff} alt="komnata" text="Third slide" />
                <Carousel.Caption></Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Portfolio;
