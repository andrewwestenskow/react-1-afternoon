import React, {Component} from 'react'

class FilterObject extends Component {
  constructor () {
    super()
    this.state = {
      unFilteredArray: [
        {name: 'Peter', 
        age: 32, 
        state: 'New York', 
        alias: 'Spiderman'}, 
        {name: 'Bruce', 
        age: '45', 
        city: 'Gotham', 
        alias: 'Batman'}, 
        {name: 'Henry', 
        age: 42, 
        state: 'New Jersey'}],
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
    let endArr = []
    let input = this.state.userInput


    for (let i=0; i<startArr.length; i++) {
      if (startArr[i].hasOwnProperty(input)) {
        endArr.push(startArr[i])
      }
    }

    this.setState({
      filteredArray: endArr
    })

  }


  render(){
    return(
      <div className='puzzleBox filterObjectPB'>
        <h4>Filter Object</h4>
        <span className='puzzleText'>Original: {JSON.stringify(this.state.unFilteredArray, null, 10)}</span>
        <input onChange={this.handleUserInput} type='text' className='inputLine'></input>
        <button onClick={this.handleFilter} className='confirmationButton'>Filter Object</button>
        <span className='resultsBox filterObjectRB'>Filtered: {JSON.stringify(this.state.filteredArray, null, 10)}</span>
      </div>
    )
  }
}

export default FilterObject