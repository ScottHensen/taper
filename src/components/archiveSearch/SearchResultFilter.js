import React from 'react'
import './SearchResultFilter.css'

class SearchResultFilter extends React.Component {

  handleRadioChange() {
    console.log('radio wammo')
  }

  render() {
    return (
      <div className="search-result-filter">
        <ul id="horizontal-radio-button-list">
          <li>
            <label>
              <input type="radio"
                     value="All"
                     checked="true"
                     onChange={this.handleRadioChange} />
              All
            </label>
          </li>
          <li>
            <label>
              <input type="radio"
                     value="Random"
                     checked="false"
                     onChange={this.handleRadioChange} />
              Random
            </label>
          </li>
          <li>
            <label>
              <input type="radio"
                     value="First"
                     checked="false"
                     onChange={this.handleRadioChange} />
              First
            </label>
          </li>
          <li>
            <label>
              <input type="radio"
                     value="Last"
                     checked="false"
                     onChange={this.handleRadioChange} />
              Last
            </label>
          </li>
        </ul>
      </div>
    )
  }
}

export default SearchResultFilter
