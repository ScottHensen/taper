import React from 'react'

class SearchParamTable extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      band:  '',
      date:  '',
      song:  '',
      venue: ''
    }
    this.handleChangeInput = this.handleChangeInput.bind(this)
  }

  handleChangeInput(event) {
    this.props.changeParams(this.state.params)
  }

  render() {
    return (
      <div className="search-param-table">
        <table>
          <thead>
            <tr>
              <th className="sort-label">Search</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="sort-label"><label>Band</label></td>
              <td><input className="sort-input-value"
                name="band"
                type="text"
                value={this.props.params.band}
                onChange={this.handleChangeInput} /></td>
            </tr>
            <tr>
              <td className="sort-label"><label>Date</label></td>
              <td><input className="sort-input-value"
                name="date"
                type="text"
                value={this.props.params.date}
                onChange={this.handleChangeInput} /></td>
            </tr>
            <tr>
              <td className="sort-label"><label>Song</label></td>
              <td><input className="sort-input-value"
                name="song"
                type="text"
                value={this.props.params.song}
                onChange={this.handleChangeInput} /></td>
            </tr>
            <tr>
              <td className="sort-label"><label>Venue</label></td>
              <td><input className="sort-input-value"
                name="venue"
                type="text"
                value={this.props.params.venue}
                onChange={this.handleChangeInput} /></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default SearchParamTable
