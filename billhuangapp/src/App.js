import React, { Component } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import MainContent from './components/Layout/Content';

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
