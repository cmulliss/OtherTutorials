import React, { Component } from 'react'

class AppNoHooks extends Component {
  state = {
    count: 0,
    isON: false,
    x: null,
    y: null,
  }

  componentDidMount() {
    document.title = `You have clicked ${this.state.count} times`
    document.addEventListener('mousemove', this.handleMouseMove)
  }

  componentDidUpdate() {
    document.title = `You have clicked ${this.state.count} times`
  }

  // to avoid memory leaks
  componentWillUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove)
  }

  // in case it hasn't updated, use prevState
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }
  // change to opposite value. Grab the previous state and update it, using ! to toggle opposite.
  toggleLight = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }))
  }

  handleMouseMove = (event) => {
    this.setState({
      x: event.pageX,
      y: event.pageY,
    })
  }

  render() {
    return (
      <div>
        <h1>No Hooks</h1>
        <>
          <h2>Counter</h2>
          <button onClick={this.incrementCount}>
            I was clicked {this.state.count} times.
          </button>

          <h2>Toggle Light</h2>
          <div
            style={{
              height: 50,
              width: 50,
              margin: 30,
              background: this.state.isOn ? 'yellow' : 'grey',
            }}
            onClick={this.toggleLight}
          ></div>
          <h2>Mouse Position</h2>
          <p>X position: {this.state.x}</p>
          <p>Y position: {this.state.y}</p>
        </>
      </div>
    )
  }
}

export default AppNoHooks

/*
reaching out the window and document apis

or can use updater fn:
this.setState(({ counter }) => ({
  counter: counter + 1
}));
*/
