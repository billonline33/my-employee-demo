import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import logo from "../../../images/images.png";

var styleCenter = {
  textAlign: "center",
  width: "100%"
};

const Header = () => {
  return (
    <div className={"header-area"}>
      <div className={"header-content"}>
        <Row>
          <Col xs={9} md={9}>
            <div className={"logo-container"}>
              <img src={logo} />
            </div>
            <div className={"tag-line"}>
              <h3>Best ERP software at affordable price</h3>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className={"banner-container"}>
              <h2>Since 1996</h2>
            </div>
          </Col>
        </Row>
        <Row />
      </div>
    </div>
  );
};

export default Header;
