import React from 'react'
import { sections } from '../components'

const { Feedback } = sections

class View extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Feedback  invertColor />
      </React.Fragment>
    )
  }
}

export default View
