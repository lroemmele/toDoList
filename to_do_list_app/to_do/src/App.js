import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      userInput: '',
      list: []
    }
  }

  changeUserInput(input){
    this.setState({
      userInput: input
    }, ()=> console.log(input))
  }

  addToList(input){
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }




  render() {
    return (
      <div className="App">
        <input
          placeholder= "Enter Somthing To Do"
          onChange= { (e)=>this.changeUserInput(e.target.value)}
          type="text"
          value={this.state.userInput}></input>
        <button onClick={ ()=> this.addToList(this.state.userInput) }>Enter</button>

        <ul>
          {this.state.list.map( (val)=> <li>{val}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
