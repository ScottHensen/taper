import React from 'react'
import Iframe from 'react-iframe'
import ArchiveSearchResultArea from '../archiveSearch/ArchiveSearchResultArea'
import getDataFromTaper from '../../utils/getDataFromTaper'
import './ArchiveRequestForm.css'

class ArchiveRequestForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      band:  '',
      date:  '',
      // song:  '',
      venue: '',
      selection: 'first',
      searchResults: [],
      embedUrl: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.buildEmbedUrl = this.buildEmbedUrl.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit(event) {
    getDataFromTaper(this.state)
      .then((response) => {
        const url = this.buildEmbedUrl(response)
        this.setState({
          searchResults: response,
          embedUrl: url
        })
        console.log('state', this.state)
      })
    event.preventDefault()
  }

  buildEmbedUrl(taperResp) {
    const baseUrl = 'https://archive.org/embed/'
    const autoplay = '&autoplay=1'
    let i = 0

    switch (this.state.selection) {
      case 'last':
        i = taperResp.shows.length
        break
      case 'random':
        i = taperResp.shows.length - 1
        break
      default:
        i = 0
    }

    console.log('i',i)
    const url = baseUrl
              + taperResp[0].shows[i].identifier
              + autoplay
    console.log('url',url)
    return url
  }

  render() {
    const outResult = JSON.stringify(this.state.searchResults,undefined,4)

    return (
      <div className = "archive-request-form">
        <form onSubmit={this.handleSubmit}>
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
                  value={this.state.band}
                  onChange={this.handleInputChange} /></td>
              </tr>
              <tr>
                <td className="sort-label"><label>Date</label></td>
                <td><input className="sort-input-value"
                  name="date"
                  type="text"
                  value={this.state.date}
                  onChange={this.handleInputChange} /></td>
              </tr>
              <tr>
                <td className="sort-label"><label>Venue</label></td>
                <td><input className="sort-input-value"
                  name="venue"
                  type="text"
                  value={this.state.venue}
                  onChange={this.handleInputChange} /></td>
              </tr>
            </tbody>
          </table>
          <br />
          <input className="submit-button" type="submit" value="Submit Request" />
        </form>
        <br />
        <Iframe
            url={this.state.embedUrl}
            position="relative"
            display="initial"
            styles={{height: "25px"}} />
        <p>Embed URL = {this.state.embedUrl}</p>
        <ArchiveSearchResultArea searchResults={outResult}/>
      </div>
    )
  }

}
export default ArchiveRequestForm
