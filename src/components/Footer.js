import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => (
  <Container
    fluid
    style={{ backgroundColor: "#212529", color: "#fff", marginTop: "30px" }}
  >
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <p className=" pt-0 py-4 adeptFoter">
        {" "}
        Союз Дизайнеров России, ИНН: 2320980553
      </p>
    </Container>
  </Container>
);

export default Footer;
