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
 //sets state of userInput with user input, console logs user input
  changeUserInput(input){
    this.setState({
      userInput: input
    }, ()=> console.log(input))
  }

//creates a temp array to store changes in list and push new items on the the array, then updates list from listArray
  addToList(input){
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

//creates temmp empty array, then sets list to emptyArray
  clearList(){

    let emptyArray = [];

    this.setState({
      list: emptyArray
    })
  }

//recieve value and key of selected list item, creates temp array and removes value at that index, then sets list to listarray
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

          <ul id="listItems">
            {this.state.list.map( (val, key)=>
              <li>{val} <button onClick={ ()=> this.removeItem(val, key)}>Remove</button></li>)}
          </ul>
          <button onClick={ ()=> this.clearList() }>Clear List</button>

        </div>
      </div>
    );
  }
}

export default App;
