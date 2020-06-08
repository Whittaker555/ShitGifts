import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        gift: [],
        loading: false
    };
}

search = () => {
  fetch('/gifts')
    .then(res => res.json())
    .then(response => this.setState({ gift: response.randomGift}));
}

  render() {
    let contents = this.state.gift;
    return (
      <div className="App">
        <div className="header">
          <h1>RANDUM</h1>
          <h2>STUPID SH*T</h2>
          <h3>YOU DON'T NEED</h3>
        </div>     
        <div dangerouslySetInnerHTML={{ __html: contents.Link }} />
        <button onClick={this.search}>CLICK DIS</button>
      </div>
    );
  }
}

export default App;