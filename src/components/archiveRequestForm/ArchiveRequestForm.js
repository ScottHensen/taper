import React from 'react'
import buildArchiveRequest from '../../utils/buildArchiveRequest'
import ArchiveSearchResultArea from '../archiveSearch/ArchiveSearchResultArea'
import getArchiveSearchResults from '../../utils/getArchiveSearchResults'
import getDataFromTaper from '../../utils/getDataFromTaper'
import xhr from '../../utils/xhr'
import './ArchiveRequestForm.css'


class ArchiveRequestForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      band:  '',
      date:  '',
      // song:  '',
      venue: '',
      // searchUrl: '',
      searchResults: {}
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.searchArchive = this.searchArchive.bind(this)
  }

  handleInputChange(event) {
    this.setState({ [event.target.name] : event.target.value })
  }

  handleSubmit(event) {
    getDataFromTaper(this.state)
      .then((response) => {
        this.setState({searchResults: response})
        console.log('state', this.state)
      })
    event.preventDefault()
  }

  searchArchive(url) {
    xhr.get(url)
       .then(response => {
         // searchResults: response.data
         console.log(response)
         // const foo = response.response.docs
         // console.log(foo)
         this.setState({ searchResults : response.response.docs })
         console.log('docs', this.state)

        })
  }

  derCallback(response) {
    console.log('der response', response)
  }

  render() {
    var searchResult = this.state.searchResults
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
        <p>{this.state.searchUrl}</p>
        <ArchiveSearchResultArea searchResults={searchResult}/>
      </div>
    )
  }

}
export default ArchiveRequestForm
