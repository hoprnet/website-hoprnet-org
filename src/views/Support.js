import React from 'react'
import { sections } from '../components'

const { FAQ, VirtualAssistant } = sections

class Sedimentum extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FAQ id="faq" />
        <VirtualAssistant />
      </React.Fragment>
    )
  }
}

export default Sedimentum
