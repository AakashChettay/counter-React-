import {Component} from 'react'

import './index.css'

class Counter extends Component {
  state = {count: 0}
  onIncrement = () => {
    this.setState((prevState)=>{
      console.log(prevState.count)
      return {count: prevState.count+1}
    })
    console.log('Luffy')
  }
  onDecrement = () => {
    this.setState((prevState)=>{
      console.log(prevState.count)
      return {count: prevState.count-1}
    })
    console.log('Zoro')
  }
  render() {
    const {count} = this.state
    return (
      <div className="container">
        <h1 className="heading">Counter</h1>
        <p className="count">{count}</p>
        <div>
          <button onClick={this.onIncrement} className="button">
            Increase
          </button>
          <button onClick={this.onDecrement} className="button">
            Decrease
          </button>
        </div>
      </div>
    )
  }
}
export default Counter
