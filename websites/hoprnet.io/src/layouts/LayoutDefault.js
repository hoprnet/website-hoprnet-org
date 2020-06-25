import React from 'react'
import { Header } from '@hoprnet/hopr-website.components'
import { Footer } from '@hoprnet/hopr-website.components'

const LayoutDefault = ({ children }) => (
  <React.Fragment>
    <Header navPosition="right" className="reveal-from-top" hideSignin hasBgColor invertColor sticky />
    <main className="site-content">{children}</main>
    <Footer />
  </React.Fragment>
)

export default LayoutDefault
