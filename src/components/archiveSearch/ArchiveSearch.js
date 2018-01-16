import React from 'react'
import ArchiveSearchForm from './ArchiveSearchForm'
import ArchiveSearchResultArea from './ArchiveSearchResultArea'

class ArchiveSearch extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      searchRequest: {},
      searchResponse: {}
    }
  }
  render() {
    return (
      <div>
        <ArchiveSearchForm request={this.state.searchRequest}/>
        <br />
        <ArchiveSearchResultArea />
      </div>
    )
  }
}

export default ArchiveSearch
