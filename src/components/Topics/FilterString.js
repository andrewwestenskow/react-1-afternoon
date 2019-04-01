import React, {Component} from 'react'

class FilterString extends Component {
  constructor(){
    super()
    this.state = {
      unFilteredArray: ['pineapple', 'wagon', 'ocean', 'feast', 'purse', 'computer', 'brown'],
      userInput: '',
      filteredArray: []
    }
  }

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })    
  }

  handleFilter = () => {
    let startArr = this.state.unFilteredArray
    let input = this.state.userInput
    let endArr = []

    for(let i=0;i<startArr.length;i++){
      if (startArr[i] === input) {
        endArr.push(startArr[i])
      }
    }

    this.setState({
      filteredArray: endArr
    })
  }


  render(){
    return(
      <div className='puzzleBox filterStringPB'>
        <h4>Filter String</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input type='text' className='inputLine' onChange={this.handleUserInput}></input>
        <button className='confirmationButton' onClick={this.handleFilter}>Filter String</button>
        <span className='resultsBox filterStringPB'>Filtered words: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}

export default FilterString