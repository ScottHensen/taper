import React from 'react'
import PrimaryHeader from './PrimaryHeader'
import ArchiveRequestForm from '../archiveRequestForm/ArchiveRequestForm'
import './PrimaryLayout.css'
const PrimaryLayout = () => (
  <div className="primary-layout">
    <PrimaryHeader />
    <div className="primary-content">
      <ArchiveRequestForm />
    </div>
  </div>
)

export default PrimaryLayout
