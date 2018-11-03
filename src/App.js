import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Character from './Character/Character';

class App extends Component {

  state = { // init state, class component
    input: '',
    length: null,
    textArray: [],
  };
  

  handleInput = (event) => {
    // console.log(event.target.value.length);    
    this.setState({ // update state as input is being changed
      input: event.target.value, // changed.input.text
      length: event.target.value.length,
      textArray: event.target.value.split('')
    });    
  }

  removeLetter = (letterIndex) => {
    // console.log(this.state.textArray);
    const newTextArray = [...this.state.textArray];
    // console.log(newTextArray); 
    newTextArray.splice(letterIndex, 1); // remove this letter
    this.setState({ // update state
      textArray: newTextArray
    });
  }

  render() {  

    let letters = null;
    if(this.state.textArray) { // unless empty...
      letters = (
        <div>
          { // map over each element in the text array
            this.state.textArray.map((curr, index) => {
              // return a char comp for each letter, execute on click remove letter func, pass index as ket and arg
              // index as key not best practice but it works in a small case such as this
              return <Character myLetter={curr} click={() => this.removeLetter(index)} key={index}/>
            })
          }
        </div>
      );
    }

    // console.log(this.state.textArray);
    return (
      <div className="App">
        
        <input type="text" onChange={this.handleInput}/>
        <p>{this.state.input}</p> {/* display input form text */}
        <Validation textLength={this.state.length} />

        {letters}
        
      </div>
      
    );
  }
}

export default App;
