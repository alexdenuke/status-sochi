import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import "../App.css";
import { Container } from "react-bootstrap";
import styled from "styled-components";

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

export const Otziv = () => (
  <Styles>
    <Container className="col-6 center ">
      <h4 className="text-center pt-4 py-2">
        Подкаст#1 от Екатерины Великой "Искусство создавать успех"
      </h4>
      <div className="ratio ratio-16x9">
        <iframe
          width="750"
          height="650"
          src="https://rutube.ru/play/embed/d806f363c6d2c657625b5225f97ab5d5/?skinColor=000000"
          frameBorder="0"
          allow="clipboard-write; autoplay"
          webkitAllowFullScreen
          mozallowfullscreen
          allowFullScreen
          title="Is a unique title"
        ></iframe>
      </div>
      <div className="text-center pt-4 py-5">
        <button type="button" className="btn btn-outline-light">
          <a href="https://rutube.ru/channel/37498849/" target="_blank ">
            {" "}
            Другие выпуски смотрите на канале RUTUBE
          </a>
        </button>
      </div>
    </Container>
  </Styles>
);
