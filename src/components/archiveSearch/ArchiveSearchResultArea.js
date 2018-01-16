import React from 'react'
import './ArchiveSearchResultArea.css'

class ArchiveSearchResultArea extends React.Component {

  render() {
    return (
      <textarea readOnly rows="20" value = {this.props.searchResults}>
      </textarea>
    )
  }
}

export default ArchiveSearchResultArea
