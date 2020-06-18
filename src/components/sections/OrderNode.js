import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import GenericSection from './GenericSection'
import SectionHeader from './partials/SectionHeader'
import { SectionProps } from '../../utils/SectionProps'

const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
}

class OrderNode extends React.Component {
  render() {
    const oddSections = {
      hasBgColor: this.props.hasBgColor,
      invertColor: this.props.invertColor,
    }

    const evenSections = {
      hasBgColor: !oddSections.hasBgColor,
      invertColor: !oddSections.invertColor,
    }

    return (
      <>
        <GenericSection id="order" {...oddSections}>
          <div className="center-content">
            <div className="container-sm">
              {/* <SectionHeader
              data={{
                title: 'HOPR node order:',
                paragraph: undefined,
              }}
            /> */}
              <iframe
                title="Order a HOPR node"
                src="https://docs.google.com/forms/d/e/1FAIpQLSc-3tJTsrJtxFD4B9DwaY6V3165Z0sicut4yb9D4NryqsRJhQ/viewform?embedded=true"
                width="640"
                height="594"
                frameBorder="0"
                marginHeight="0"
                marginWidth="0"
              >
                Loading…
              </iframe>
            </div>
          </div>
        </GenericSection>
        <GenericSection id="remarks" {...evenSections}>
          <div className="center-content">
            <div className="container-sm">
              <h2 className="section-header mt-0 mb-0 reveal-from-top" data-reveal-delay="150">
                REMARKS:
              </h2>

              <ol style={{ textAlign: 'left' }}>
                <li>
                  Add your name to ensure you are one of the first to be notified about details of HOPR nodes, including
                  availability, specifications, price, and shipment dates.
                </li>
                <li>
                  Subscribing does NOT guarantee delivery of a HOPR node. You will receive an email in mid-July, after
                  which you will be able to purchase a HOPR node. (naturally, you can also install and run a HOPR node
                  on a device of your choice)
                </li>
              </ol>
            </div>
          </div>
        </GenericSection>
        <GenericSection id="bounties" {...oddSections}>
          <div className="center-content">
            <div className="container-sm">
              Jump the waitlist:
              <h2 className="section-header mt-0 mb-0 reveal-from-top" data-reveal-delay="150">
                Gitcoin Bounties:
              </h2>
              Why wouldn't you get paid for developing open source software? Check out our bounties on Gitcoin - some
              are fairly beginner-friendly while some require more in-depth knowledge of the HOPR protocol. HOPR is
              built by the community for the community <span className="text-color-high">(coming mid-July 2020)</span>.
              <br />
              <br />
              The positive side-effect. Participating in Bounties makes you end up on top of the waitlist.
            </div>
          </div>
        </GenericSection>
        <GenericSection id="bounties" {...evenSections}>
          <div className="center-content">
            <div className="container-sm">
              <h2 className="section-header mt-0 mb-0 reveal-from-top" data-reveal-delay="150">
                Enabling Data Privacy:
              </h2>
              Lack of privacy isn't just a problem for individuals suffering at the hands of data harvesting social
              media giants. Data privacy has become a major societal and economic issue requiring government
              intervention and the creation of entire compliance departments.
            </div>
          </div>
        </GenericSection>
      </>
    )
  }
}

OrderNode.propTypes = propTypes
OrderNode.defaultProps = defaultProps

export default OrderNode
