import React from 'react'
import { sections } from '../components'

const { Contact, Blog, ForYou, Videos } = sections

class HOPR extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ForYou id="for_you" />
        <Videos id="videos" hasBgColor invertColor />
        <Blog id="blog" />
        <Contact id="contact" topDivider />
      </React.Fragment>
    )
  }
}

export default HOPR
