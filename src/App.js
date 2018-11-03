import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';

class App extends Component {

  state = { // init state, class component
    input: '',
    length: null,
  }

  handleInput = (event) => {
    // console.log(event.target.value.length);    
    this.setState({ // update state as input is being changed
      input: event.target.value, // changed.input.text
      length: event.target.value.length,
    })
  }

  render() {
    return (
      <div className="App">
        
        <input type="text" onChange={this.handleInput}/>
        <p>{this.state.input}</p> {/* display input form text */}
        <Validation textLength={this.state.length} />
        
      </div>
    );
  }
}

export default App;
