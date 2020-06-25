import React from 'react'
import { Blog } from '@hoprnet/hopr-website.components'
import { ForYou } from '@hoprnet/hopr-website.components'
import Videos from '@hoprnet/hopr-website.components/sections/Videos'

class HOPR extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ForYou id="for_you" />
        <Videos id="videos" hasBgColor invertColor />
        {/* News Component */}
        <Blog id="blog" />
      </React.Fragment>
    )
  }
}

export default HOPR
