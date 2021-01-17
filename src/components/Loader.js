import React from "react"
import ContentLoader from "react-content-loader"

const Loader = (props) => (
  <ContentLoader 
    speed={2}
    width={250}
    height={400}
    viewBox="0 0 250 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="10" y="13" rx="4" ry="4" width="230" height="200" /> 
    <rect x="9" y="264" rx="3" ry="3" width="230" height="15" /> 
    <rect x="9" y="288" rx="3" ry="3" width="230" height="15" /> 
    <rect x="10" y="230" rx="0" ry="0" width="185" height="24" /> 
    <rect x="9" y="313" rx="0" ry="0" width="95" height="15" />
  </ContentLoader>
)

export default Loader;