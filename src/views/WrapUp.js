import React from 'react'
import { sections } from '../components'

const { WrapUp } = sections

class View extends React.Component {
  render() {
    return (
      <React.Fragment>
        <WrapUp  invertColor />
      </React.Fragment>
    )
  }
}

export default View
