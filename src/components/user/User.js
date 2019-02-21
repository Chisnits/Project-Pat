import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInstaData } from '../../actions/SimpleAction';
import InstaContent from './InstaContent';
import './User.scss';
class User extends Component {
  constructor(props){
    super(props);

    this.state = {
      instaData: []
    }
  }
  
componentDidMount(){
  this.props.instaData();
}

 render() {
  return (
   <div className="User">
   <InstaContent content={this.props.simpleReducer.result ? this.props.simpleReducer.result : [] } />
   </div>
  );
 }
}

const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  instaData: () => dispatch(getInstaData())
 })
export default connect(mapStateToProps, mapDispatchToProps)(User);
