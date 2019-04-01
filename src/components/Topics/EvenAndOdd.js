import React, {Component} from 'react'

class EvenAndOdd extends Component {
  constructor(){
    super()
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: ''
    }

    this.handleUserInput = this.handleUserInput.bind(this)
    this.handleSplit = this.handleSplit.bind(this)
  }

  handleUserInput (e) {
    this.setState({
      userInput: e.target.value
    })    
  }

  handleSplit () {
    let nums = this.state.userInput.split(',')
    let evens = []
    let odds = []
    for (let i = 0; i <nums.length; i++) {
      if(nums[i] %2 === 0) {
        evens.push(Number(nums[i]) )
      } else {
        odds.push(Number(nums[i]) )
      }
    }
  

    console.log(evens)

    this.setState({
      evenArray: evens,
      oddArray: odds,
    })

  }

  render(){
    return(
      <div>
        <div className='puzzleBox evenAndOddPB'>
          <h4>Evens and Odds</h4>
          <input onChange={this.handleUserInput}  className='inputLine' type='text'></input>
          <button onClick={this.handleSplit} className='confirmationButton'>Split</button>
          <span className="resultsBox">Evens:{JSON.stringify(this.state.evenArray)}</span>
          <span className="resultsBox">Odds: {JSON.stringify(this.state.oddArray)}</span>

        </div>
      </div>
    )
  }
}

export default EvenAndOdd