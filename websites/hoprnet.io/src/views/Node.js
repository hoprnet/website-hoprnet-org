import React from 'react'
import { NodeHero } from '@hoprnet/hopr-website.components'
import RequestTestnet from '@hoprnet/hopr-website.components/sections/RequestTestnet'

class Node extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NodeHero />
        <RequestTestnet hasBgColor invertColor />
      </React.Fragment>
    )
  }
}

export default Node
