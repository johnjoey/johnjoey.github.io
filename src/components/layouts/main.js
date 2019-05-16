/**
 * Main component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import "./main.scss"

const Main = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
    
        {/* header */}
          <main>{children}</main>
        {/* footer */}
        
      </>
    )}
  />
)

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
