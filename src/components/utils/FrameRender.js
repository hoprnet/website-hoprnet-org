import React from 'react'
import PropTypes from 'prop-types'
import Frame from 'react-frame-component'
/**
 * Render a full HTML page in IFRAme, support RAW HTML (initialContent) and React Components (children)
 * @param {String} initialContent  raw HTML content
 * @param {String} src src of iframe (for external url)
 * @param {Node} children Children to render
 */
const FrameRender = ({ initialContent, src, children, ...props }) => {
  return (
    <Frame initialContent={initialContent} src={src} loading="lazy" {...props}>
      {children}
    </Frame>
  )
}

FrameRender.propTypes = {
  initialContent: PropTypes.string,
  src: PropTypes.string,
  children: PropTypes.any,
}

export default FrameRender
