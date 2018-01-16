import React from 'react'
import SearchParamTable from './SearchParamTable'
import SearchResultFilter from './SearchResultFilter'
import SearchSubmitBar from './SearchSubmitBar'

class ArchiveSearchForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      params : {
        band:  '',
        date:  '',
        song:  '',
        venue: ''
      }
    }
    // this.handleParamChange = this.handleParamChange.bind(this)
  }

  handleChangeParams(newParams) {
    ''
    this.setState({ params : newParams })
  }

  render() {
    return (
      <div>
        <form>
          <SearchParamTable
            params = {this.state.params}
            changeParams = {this.handleChangeParams.bind(this)}/>
          <SearchResultFilter />
          <SearchSubmitBar />
        </form>
      </div>
    )
  }
}

export default ArchiveSearchForm
