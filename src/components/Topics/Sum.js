import React, {Component} from 'react'

class Sum extends Component {
  constructor(){
    super()

    this.state = {
      number1: 0,
      number2: 0,
      sum: null
    }
  }

  handleUserInput1 = (e) => {
    this.setState({
      number1: e.target.value
    })    
  }

  handleUserInput2 = (e) => {
    this.setState({
      number2: e.target.value
    })    
  }

  sumNumbers = () => {
    let num1 = this.state.number1
    let num2 = this.state.number2

    let sum = num1 + num2

    this.setState({sum: sum})
  }
  render(){
    return(
      <div className='puzzleBox sumPB'>
        <h4>Sum</h4>
        <input type='number' className='inputLine' onChange={this.handleUserInput1}></input>
        <input type='number' className='inputLine' onChange={this.handleUserInput2}></input>
        <button className='confirmationButton' onClick={this.sumNumbers}>Sum</button>
        <span className='resultsBox'>Sum: {this.state.sum}</span>
      </div>
    )
  }
}

export default Sum