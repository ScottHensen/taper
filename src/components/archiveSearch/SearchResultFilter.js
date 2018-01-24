import React from 'react'
import './SearchResultFilter.css'

class SearchResultFilter extends React.Component {

  constructor({ initialFilter }) {
    super()
    this.state = {
      selectedFilter: initialFilter
    }

    this.handleRadioChange = this.handleRadioChange.bind(this)
  }

  handleRadioChange(event) {
    const newState = event.target.value
    this.setState({ selectedFilter : event.target.value })
    this.props.callbackParent(newState)
  }

  render() {
    return (
      <div className="search-result-filter">
        <ul id="horizontal-radio-button-list">
          <li>
            <label>
              <input type="radio"
                     value="first"
                     checked={this.state.selectedFilter === 'first'}
                     onChange={this.handleRadioChange} />
              First
            </label>
          </li>
          <li>
            <label>
              <input type="radio"
                     value="last"
                     checked={this.state.selectedFilter === 'last'}
                     onChange={this.handleRadioChange} />
              Last
            </label>
          </li>
          <li>
            <label>
              <input type="radio"
                     value="random"
                     checked={this.state.selectedFilter === 'random'}
                     onChange={this.handleRadioChange} />
              Random
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

export default SearchResultFilter
