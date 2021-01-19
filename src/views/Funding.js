import React from 'react'
import { sections } from '../components'

const { Funding } = sections

class View extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Funding  invertColor />
      </React.Fragment>
    )
  }
}

export default View
