import React from 'react'
import { EmbedPdf } from '../elements'

const Pdf = document => {
  return () => (
    <>
      <a href={require(`../assets/documents/${document}`)} target="_blank">
        Download PDF
      </a>
      <EmbedPdf src={require(`../assets/documents/${document}`)} />
    </>
  )
}

export default Pdf
