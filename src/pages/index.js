import React from "react"

import Layout from "../components/layouts/main"
import SEO from "../components/common/seo"
import Landing from "../components/sections/landing";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`John Croker`, `portfolio`, `website`]} />

    <Landing />
  </Layout>
)

export default IndexPage
