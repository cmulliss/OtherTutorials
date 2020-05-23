import React, { Component } from 'react'

class AppNoHooks extends Component {
  state = {
    count: 0,
    isON: false,
  }
  // in case it hasn't updated, use prevState
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }))
  }
  // change to opposite value
  toggleLight = () => {
    this.setState((prevState) => ({
      isOn: !prevState.isOn,
    }))
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
        </>
      </div>
    )
  }
}

export default AppNoHooks

/*
or can use updater fn:
this.setState(({ counter }) => ({
  counter: counter + 1
}));
*/
