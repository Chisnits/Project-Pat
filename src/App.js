import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      
    }
  }
  

 render() {
  return (
   <div className="App">
    <Link to={`/user`}>Hit Meh</Link>
   </div>
  );
 }
}

export default App;
