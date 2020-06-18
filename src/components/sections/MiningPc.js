import React from 'react'
import PropTypes from 'prop-types'
import GenericSection from './GenericSection'
import { SectionProps } from '../../utils/SectionProps'

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
}

const MiningPc = props => {
  return (
    <GenericSection {...props}>
      <div className="governance center-content">
        <div className="container-sm">
          <h2 className="section-header mt-0 mb-0 reveal-from-top" data-reveal-delay="150">
            Mining PC:
          </h2>
          <div className="container reveal-from-top" data-reveal-delay="300">
            The HOPR privacy network relies on a globally distributed network of mix nodes. To support and rapidly grow
            the community running this network, HOPR will release a plug-and-earn mix node on a mini PC. Open
            incentivization allows anyone to run a HOPR node, stake and get rewarded with HOPR tokens while providing
            privacy for Web3.
            <br />
            To be added to the “Defenders of Privacy” node runners waitlist, find out more here:
          </div>
        </div>
      </div>
    </GenericSection>
  )
}

MiningPc.propTypes = propTypes
MiningPc.defaultProps = defaultProps

export default MiningPc
