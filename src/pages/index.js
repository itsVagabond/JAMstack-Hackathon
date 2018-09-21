import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <p>hello world</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
