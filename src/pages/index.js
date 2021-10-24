import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Biruk Misganaw</title>
      <div style={headingStyles}>
        Hello, I'm Biruk Misganaw
        <br />
        <span style={headingAccentStyles}>— welcome to my personal website! </span>
      </div>
      <div>
        More content coming soon
      </div>
    </main>
  )
}

export default IndexPage
