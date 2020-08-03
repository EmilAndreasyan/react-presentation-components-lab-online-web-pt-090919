// Code SimpleComponent Here
import React, {Component} from 'react';

export default class SimpleComponent extends Component {
  state = {
    mood: 'happy'
  }
  
  handleClick = () => {
    // const toggleMood = this.state.mood === 'happy' ? 'sad' : 'happy'
    // this.setState({mood: toggleMood})
    this.setState(prevState => {
      return (mood: !prevState.mood)
    })
  }
  render(){
    return(
      <div onClick={this.handleClick}>{this.state.mood}</div>
      )
  }
}
