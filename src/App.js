import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import { simpleAction } from './actions/SimpleAction';
import { API_RECENT } from './client-config';
import './App.css';
class App extends Component {

  // simpleAction = (event) => {
  //   this.props.simpleAction();
  //  }

  simpleAction(){
    fetch(API_RECENT)
    .then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(JSON.stringify(myJson));
    });
   }

 render() {
  return (
   <div className="App">
    <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />
     <h1 className="App-title">Welcome to React</h1>
    </header>
    {/* <pre>
      {
        JSON.stringify(this.props)
      }
    </pre> */}
    <p className="App-intro">
     To get started, edit <code>src/App.js</code> and save to reload
    </p>
    <button onClick={this.simpleAction}>Test redux action</button>
   </div>
  );
 }
}
const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })
export default connect(mapStateToProps, mapDispatchToProps)(App);
