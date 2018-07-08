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
      searchValue: "",
      companyInfo: {},
      employeeInfo: [],
      sortByField: "firstName"
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSortByChange = this.handleSortByChange.bind(this);
  }

  getEmployeeInfo() {
    let apiUrl = `$/api/employees?_sort=${this.state.sortByField}&_order=asc&${
      this.state.sortByField
    }_like=${this.state.searchValue}`;
    axios.get(apiUrl).then(response => {
      console.log("employees Info: ", response.data);
      this.setState({ employeeInfo: response.data });
    });
  }

  handleSearchChange(e) {
    this.setState({ searchValue: e.target.value }, function() {
      this.getEmployeeInfo();
    });
    console.log("search text=", this.state.searchValue);
  }

  handleSortByChange = sortByField => {
    this.setState({ sortByField }, function() {
      console.log("this.state.sortByFiled=", this.state.sortByField);
      this.getEmployeeInfo();
    });
  };

  componentDidMount() {
    console.log("componentDidMount Run");
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
                  firstName
                </MenuItem>
                <MenuItem
                  eventKey="lastName"
                  onSelect={this.handleSortByChange}
                >
                  lastName
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
              value={this.state.searchValue}
              placeholder="Enter text"
              onChange={this.handleSearchChange}
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
