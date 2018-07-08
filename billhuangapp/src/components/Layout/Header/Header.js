import React from "react";
import { Grid, Col, Row } from "react-bootstrap";
import logo from "../../../images/images.png";
import moment from "moment";
import "./Header.css";

var styleCenter = {
  textAlign: "center",
  width: "100%"
};

const Header = ({ companyInfo }) => {
  const companyEst = moment(companyInfo.companyEst).format("YYYY");
  console.log("company info:", companyInfo);
  return (
    <div className={"header-area"}>
      <div className={"header-content"}>
        <Row>
          <Col xs={9} md={9}>
            <div className={"logo-container"}>
              <img src={logo} />
            </div>
            <div className={"tag-line"}>
              <h3>{companyInfo.companyMotto}</h3>
            </div>
          </Col>
          <Col xs={3} md={3}>
            <div className={"banner-container"}>
              <h2>Since {companyEst}</h2>
            </div>
          </Col>
        </Row>
        <Row />
      </div>
    </div>
  );
};

export default Header;
