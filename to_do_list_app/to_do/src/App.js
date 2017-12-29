import React, { Component } from 'react';
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

  clearList(){

    let emptyArray = [];

    this.setState({
      list: emptyArray
    })
  }


  removeItem(val, key){
    console.log(val+ key);
    let listArray = this.state.list;
    listArray.splice(key,1);

    this.setState({
      list: listArray
    })
  }

  render() {
    return (
      <div className="App">
        <div id="appContent">
         <h1>TO DO LIST</h1>
          <input
            placeholder= "Enter Somthing To Do"
            onChange= { (e)=>this.changeUserInput(e.target.value)}
            type="text"
            value={this.state.userInput}></input>
          <button onClick={ ()=> this.addToList(this.state.userInput) }>Enter</button>
          <button onClick={ ()=> this.clearList() }>Clear List</button>
          <ul id="listItems">
            {this.state.list.map( (val, key)=>
              <li>{val} <button onClick={ ()=> this.removeItem(val, key)}>Remove</button></li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
