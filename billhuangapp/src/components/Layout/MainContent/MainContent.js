import React, { Component } from "react";
import { connect } from "react-redux";
import Card from "../../Employee/Card";
import { Col, Row } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import "./MainContent.css";
import { loadEmployeeList } from "../../../reducers/employeeList";
import { bindActionCreators } from "redux";

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      companyInfo: {},
      employeeInfo: []
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  getEmployeeInfo() {
    this.props.loadEmployeeList(this.props.sortByField, this.state.searchValue);
    console.log("0001", this.props.sortByField);
    console.log("0002", this.state.searchValue);
  }

  handleSearchChange(e) {
    this.setState({ searchValue: e.target.value }, function() {
      this.getEmployeeInfo();
    });
    console.log("search text=", this.state.searchValue);
  }

  componentDidMount() {
    console.log("componentDidMount Run");
    this.getEmployeeInfo();
  }

  render() {
    var paddingTop = {
      "padding-top": "13px"
    };

    console.log("the.props.sortByField=", this.props.sortByField);

    return (
      <div className={"content-area"}>
        <div className={"floatLeft"}>
          <h1>Our Employees</h1>
        </div>
        <div className={"floatRight"}>
          <div className={"floatLeft"} />
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

const mapStateToProps = state => ({
  sortByField: state.SortBy.sortByField
});

const mapDispatchToProps = dispatch => {
  bindActionCreators({ loadEmployeeList }, dispatch);
};

MainContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContent);

export default MainContent;
