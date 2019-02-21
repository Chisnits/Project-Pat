import React, { Component } from 'react';
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
    <a href='http://localhost:8080/auth/instagram'>
      <button className='button'>
        Log in to Instagram
      </button>
      </a>
   </div>
  );
 }
}

export default App;
