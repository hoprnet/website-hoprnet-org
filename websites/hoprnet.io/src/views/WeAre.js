import React from 'react'
import { Enabling } from '@hoprnet/hopr-website.components'
import { OpenSource } from '@hoprnet/hopr-website.components'

class WeAre extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Enabling id="enabling_data_privacy" />
        <OpenSource id="open_source_support" />
      </React.Fragment>
    )
  }
}

export default WeAre
