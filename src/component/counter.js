import React, { Component } from 'react'

class Counter extends Component {
  render () {
    const { value, Increment, Decrement } = this.props
    return (
      <div>
        <h2>counter : {value}</h2>
        <button onClick={Decrement}>decrement</button>
        <button onClick={Increment}>increment</button>
      </div>
    )
  }
}

export default Counter
