import React from 'react'
import NodeHero from '../components/sections/NodeHero'
import MiningPc from '../components/sections/MiningPc'
import OrderNode from '../components/sections/OrderNode'
import RequestTestnet from '../components/sections/RequestTestnet'

class Node extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NodeHero />
        <MiningPc />
        <OrderNode hasBgColor invertColor />
        <RequestTestnet hasBgColor invertColor />
      </React.Fragment>
    )
  }
}

export default Node
