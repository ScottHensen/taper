import React from 'react'
import PrimaryHeader from './PrimaryHeader'
import ArchiveRequestForm from '../archiveRequestForm/ArchiveRequestForm'
import ArchiveSearch from '../archiveSearch/ArchiveSearch'
import './PrimaryLayout.css'

const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
      <div className="primary-content">
        <ArchiveRequestForm />
      </div>
    <PrimaryHeader />
      <div className="primary-content">
        <ArchiveSearch />
      </div>
  </div>
)

export default PrimaryLayout
