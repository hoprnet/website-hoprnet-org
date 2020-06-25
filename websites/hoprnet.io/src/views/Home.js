import React from 'react'
import { HeroFull } from '@hoprnet/hopr-website.components'
import Products from '@hoprnet/hopr-website.components/sections/Products'
import { FeaturesTabs } from '@hoprnet/hopr-website.components'
import { FeaturesTiles } from '@hoprnet/hopr-website.components'
import { Blogs } from '@hoprnet/hopr-website.components'
import { Clients } from '@hoprnet/hopr-website.components'
import TeamAndInvestors from '@hoprnet/hopr-website.components/sections/TeamAndInvestors'
import { Contact } from '@hoprnet/hopr-website.components'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroFull />
        <Products id="products" hasBgColor invertColor redirect />
        <FeaturesTabs id="built_for" redirect />
        <FeaturesTiles id="all_about" hasBgColor invertColor />
        <Blogs id="blogs" redirect />
        <Clients id="investors" hasBgColor invertColor />
        <TeamAndInvestors id="team_and_investors" />
        <Contact id="contact" />
      </React.Fragment>
    )
  }
}

export default Home
