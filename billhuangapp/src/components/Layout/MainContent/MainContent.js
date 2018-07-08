import React, { Component } from "react";
import Card from "../../Employee/Card";
import { Col, Row } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "./MainContent.css";
import axios from "axios";
import { SplitButton, MenuItem } from "react-bootstrap";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      companyInfo: {},
      employeeInfo: [],
      sortByField: "firstName"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  getCompanyInfo() {
    axios.get("/api/companyInfo").then(response => {
      console.log("comp Info: ", response.data);
      this.setState({ companyInfo: response.data });
    });
  }

  getEmployeeInfo() {
    axios.get("/api/employees").then(response => {
      console.log("employees Info: ", response.data);
      this.setState({ employeeInfo: response.data });
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log("search text=", this.state.value);
  }

  handleSortByChange = sortByField => {
    this.setState({ sortByField }, function() {
      console.log("this.state.sortByFiled=", this.state.sortByField);
    });
  };

  componentDidMount() {
    console.log("componentDidMount Run");
    this.getCompanyInfo();
    this.getEmployeeInfo();
  }

  render() {
    var paddingTop = {
      "padding-top": "13px"
    };

    const paddingStyle = {
      padding: "8px",
      float: "left"
    };

    const { sortByField } = this.state;

    return (
      <div className={"content-area"}>
        <div className={"floatLeft"}>
          <h1>Our Employees</h1>
        </div>
        <div className={"floatRight"}>
          <div className={"floatLeft"}>
            <div className={"floatLeft labelStyle"}> Sort by:</div>
            <div className={"floatLeft"} style={paddingStyle}>
              <SplitButton bsSize="large" title={`${sortByField} `}>
                <MenuItem
                  eventKey="firstName"
                  onSelect={this.handleSortByChange}
                >
                  First Name
                </MenuItem>
                <MenuItem
                  eventKey="lastName"
                  onSelect={this.handleSortByChange}
                >
                  Last Name
                </MenuItem>
                <MenuItem
                  eventKey="jobTitle"
                  onSelect={this.handleSortByChange}
                >
                  jobTitle
                </MenuItem>
                <MenuItem eventKey="age" onSelect={this.handleSortByChange}>
                  age
                </MenuItem>
                <MenuItem
                  eventKey="dateJoined"
                  onSelect={this.handleSortByChange}
                >
                  dateJoined
                </MenuItem>
              </SplitButton>
            </div>
          </div>
          <div className={"floatLeft labelStyle paddingTop"}>Search: </div>
          <div className={"floatLeft"} style={paddingTop}>
            <FormControl
              type="text"
              value={this.state.value}
              placeholder="Enter text"
              onChange={this.handleChange}
            />
          </div>
        </div>
        <Row>
          <Col xs={12}>
            {this.state.employeeInfo.map((item, index) => {
              return <Card employeeInfo={item} key={item.id} />;
            })}
          </Col>
        </Row>
      </div>
    );
  }
}

export default MainContent;
