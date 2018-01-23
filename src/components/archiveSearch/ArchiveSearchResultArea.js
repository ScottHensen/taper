import React from 'react'
import './ArchiveSearchResultArea.css'

class ArchiveSearchResultArea extends React.Component {

  render() {
    const textAreaValue = this.props.searchResults
    return (
      <textarea value={textAreaValue} rows="20" readOnly />
    )
  }
}

export default ArchiveSearchResultArea
