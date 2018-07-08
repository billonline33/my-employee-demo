import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainContent from "./components/Layout/MainContent/MainContent";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyInfo: {}
    };
  }

  getCompanyInfo() {
    axios.get("/api/companyInfo").then(response => {
      console.log("comp Info: ", response.data);
      this.setState({ companyInfo: response.data });
    });
  }

  componentDidMount() {
    this.getCompanyInfo();
  }

  render() {
    return (
      <div className="App">
        <Header companyInfo={this.state.companyInfo} />
        <MainContent employeeInfo={this.state.employeeInfo} />
      </div>
    );
  }
}

export default App;
