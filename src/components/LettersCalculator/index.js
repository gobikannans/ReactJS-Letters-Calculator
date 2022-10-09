import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  onSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const letterCount = searchInput.length

    return (
      <div className="bg-container">
        <div className="card-container">
          <div className="input-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="input" className="paragraph">
              Enter the phrase
            </label>
            <input
              type="text"
              className="input"
              placeholder="Enter the phrase"
              onChange={this.onSearchInput}
              id="input"
            />
            <div className="letters-container">
              <p className="letter-heading">No.of Letters: {letterCount}</p>
            </div>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img-logo"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
