import React from 'react'
import './ArchiveRequestForm.css'

class ArchiveRequestForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      band:  '',
      date:  '',
      song:  '',
      venue: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit(event) {
    alert(' band= ' + this.state.band + ',date= '  + this.state.date  +
          ',song= ' + this.state.song + ',venue= ' + this.state.venue   )
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tr>
            <th class="sort-label">Search</th>
            <th>Value</th>
          </tr>
          <tr>
            <td class="sort-label"><label>Band</label></td>
            <td><input class="sort-input-value"
              name="band"
              type="text"
              value={this.state.band}
              onChange={this.handleInputChange} /></td>
          </tr>
          <tr>
            <td class="sort-label"><label>Date</label></td>
            <td><input class="sort-input-value"
              name="date"
              type="text"
              value={this.state.date}
              onChange={this.handleInputChange} /></td>
          </tr>
          <tr>
            <td class="sort-label"><label>Song</label></td>
            <td><input class="sort-input-value"
              name="song"
              type="text"
              value={this.state.song}
              onChange={this.handleInputChange} /></td>
          </tr>
          <tr>
            <td class="sort-label"><label>Venue</label></td>
            <td><input class="sort-input-value"
              name="venue"
              type="text"
              value={this.state.venue}
              onChange={this.handleInputChange} /></td>
          </tr>
        </table>
        <br />
        <input class="submit-button" type="submit" value="Submit Request" />
      </form>
    )
  }

}
export default ArchiveRequestForm
