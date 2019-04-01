import React, {Component} from 'react'

class Palindrome extends Component {
  constructor(){
    super()
    this.state = {
      userInput: '',
      palindrome: ''
    }
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })    
  }

  handleReverse = () => {
    let input = this.state.userInput
    if(input === (input.split('').reverse().join(''))){
      this.setState({palindrome: 'true'})
    } else {
      this.setState({palindrome: 'false'})
    }

  }


  render(){
    return(
      <div className='puzzleBox palindromePB'>
        <h4>Palindrome</h4>
        <input type='text' className='inputLine' onChange={this.handleUserInput}></input>
        <button className='confirmationButton' onClick={this.handleReverse}>Check</button>
        <span className='resultsBox'>Palindrome: {this.state.palindrome}</span>
      </div>
    )
  }
}

export default Palindrome