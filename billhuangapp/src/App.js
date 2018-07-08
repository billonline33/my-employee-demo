import React, { Component } from "react";
import "./App.css";
import Header from "./components/Layout/Header/Header";
import MainContent from "./components/Layout/MainContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent />
      </div>
    );
  }
}

export default App;
