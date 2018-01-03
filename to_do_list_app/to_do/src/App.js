import React, { Component } from 'react';
import './App.css';
import {PrintButton} from './Print.js';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      userInput: '',
      list: []
    }
  }
 //sets state of userInput with user input, console logs user input
  changeUserInput(input){
    this.setState({
      userInput: input
    })
  }

//creates a temp array to store changes in list and push new items on the the array, then updates list from listArray
  addToList(input){
  //  let listArray = this.state.list;
  //  listArray.push(input);

    this.setState({
      list: [...this.state.list, input],
      userInput: ''
    });
  }

//creates temmp empty array, then sets list to emptyArray
  clearList(){
    let emptyArray = [];

    this.setState({
      list: emptyArray
    });
  }

//recieve value and key of selected list item, creates temp array and removes value at that index, then sets list to listarray
  removeItem(val, key){
    //console.log("VALUE " + val + " KEY " + key);
    let listArray = [...this.state.list];
    listArray.splice(key,1);

    this.setState({
      list: listArray,
    });
  }

//moves selected value to new index of listArray, then sets list equal to listArray
  moveItem(val, key, newKey){
    //console.log("VALUE " + val + " KEY " + key + " NEWKEY " + direction);
    let listArray = [...this.state.list];
    //console.log(listArray);
    listArray.splice(newKey, 0, listArray.splice(key, 1)[0]);
    //console.log(listArray);

    this.setState({
      list: listArray,
    });
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

          <ul id="listItems">
            {this.state.list.map( (val, key)=>
              <li>{val} <button onClick={ ()=> this.removeItem(val, key)}>Remove</button>
              <button onClick={ ()=> this.moveItem(val, key, key - 1)}>+</button><button onClick={  ()=> this.moveItem(val, key, key + 1) }>-</button></li>)}
          </ul>
          <button onClick={ ()=> this.clearList() }>Clear List</button>
          <PrintButton listPrint={this.state.list} ></PrintButton>
        </div>
      </div>
    );
  }
}

export default App;
