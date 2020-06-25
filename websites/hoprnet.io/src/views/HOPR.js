import React from 'react'
import { AboutUs } from '@hoprnet/hopr-website.components'
import { Governance } from '@hoprnet/hopr-website.components'
import { Clients } from '@hoprnet/hopr-website.components'
// import Investors from '@hoprnet/hopr-website.components/sections/Investors'
import Token from '@hoprnet/hopr-website.components/sections/Token'
import Values from '@hoprnet/hopr-website.components/sections/Values'
import Team from '@hoprnet/hopr-website.components/sections/Team'
import { Jobs } from '@hoprnet/hopr-website.components'
import { ContactTabs } from '@hoprnet/hopr-website.components'

class HOPR extends React.Component {
  render() {
    return (
      <React.Fragment>
        <AboutUs id="about" />
        <Governance id="governance" hasBgColor invertColor />
        <Clients id="clients" showQuestion />
        {/* <Investors id="investors" hasBgColor invertColor showQuestion /> */}
        <Token id="token" hasBgColor invertColor />
        <Values id="values" />
        <Team id="team" hasBgColor invertColor />
        <Jobs id="jobs" />
        <ContactTabs id="contact" hasBgColor invertColor redirect />
      </React.Fragment>
    )
  }
}

export default HOPR
