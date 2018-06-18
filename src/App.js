import React, { Component } from "react";
import { connect } from 'react-redux';
import { increment, decrement } from './actions/index'
import "./App.css";

class App extends Component {
  constructor(props){
    super(props)
    

    this.onIncrement = this.onIncrement.bind(this);
    this.onDecrement = this.onDecrement.bind(this);
  }

  onIncrement(){
    this.props.onIncrement();
  }

  onDecrement(){
    this.props.onDecrement();
  }

  render() {
    return (
      <div className="App">
        <h2>contador</h2>
        <label>{this.props.counter}</label>
        <br/><br/>
        <button onClick={this.onIncrement}>Incrementar</button>
        <button onClick={this.onDecrement}>Restar</button>
      </div>
    );
  }
}

 const mapStateToProps = (value) => {
  return {
    counter: value
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => dispatch(increment()),
    onDecrement: () => dispatch(decrement())

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
