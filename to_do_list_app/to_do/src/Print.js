import React, { Component } from 'react';
import './App.js';
import './App.css';

export class PrintButton extends React.Component {

printList(list){
  //console.log(list);
  var myWindow = window.open("", "MsgWindow", "width=500,height=500");
  myWindow.document.write("<ul>");
  for (var i = 0; i < list.length; i++){
    myWindow.document.write("<li>" + list[i] + "</li>" );
  }
  myWindow.document.write("</ul>");

}
  render(){


    return(
      <div>
      <button onClick={ () => this.printList(this.props.listPrint) }>Print</button>

      </div>
    );
  }
}
