import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { FrameContextConsumer } from 'react-frame-component'
import { SectionProps } from '../utils/SectionProps'
import FrameRender from '../utils/FrameRender'

const mountTime = 1300
let timeout = null
const propTypes = {
  children: PropTypes.node,
  ...SectionProps.types,
}

const defaultProps = {
  children: null,
  ...SectionProps.defaults,
}
//RAW HTML
const HTML = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
</head>
<body>
<script src="https://unpkg.com/tripetto-runner-foundation"></script>
<script src="https://unpkg.com/tripetto-runner-autoscroll"></script>
<script src="https://unpkg.com/tripetto-services"></script>
<script>
var tripetto = TripettoServices.init({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiMWJrU1J6Mk5QS2lsdUZrTDRzZExpVjJ2d2lOelFvSUx0aTNMSXBHdEFycz0iLCJkZWZpbml0aW9uIjoiL0pkMDNFMzJmdWozM2tNRXgyUDh3ODlJVTdRRXQyTVNrNGNWODd2UkpRcz0iLCJ0eXBlIjoiY29sbGVjdCJ9.HxyJj2gYagMZH1aQoyqDllsKc1mHsKH_qmibY_ogfLI" });

TripettoAutoscroll.run({
    element: document.body,
    definition: tripetto.definition,
    styles: tripetto.styles,
    l10n: tripetto.l10n,
    locale: tripetto.locale,
    translations: tripetto.translations,
    attachments: tripetto.attachments,
    onSubmit: tripetto.onSubmit
});
</script>
</body>
</html>
`

const Funding = props => {
  const [ready, setReady] = useState(false)
  useEffect(() => {
    return () => {
      clearTimeout(timeout)
    }
  })
  return (
    <>
      {!ready && (
        <div className="loading-frame">
          <div className="title">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
      <FrameRender
        initialContent={HTML}
        className="component-frame whole-page frameIn"
        style={{ display: ready ? 'block' : 'none' }}
      >
        <FrameContextConsumer>
          {
            // Callback is invoked with iframe's window and document instances
            ({ document }) => {
              document.addEventListener('DOMContentLoaded', () => {
                timeout = setTimeout(() => {
                  setReady(true)
                }, mountTime)
              })
              // Render Children
            }
          }
        </FrameContextConsumer>
      </FrameRender>
    </>
  )
}

Funding.propTypes = propTypes
Funding.defaultProps = defaultProps

export default Funding
