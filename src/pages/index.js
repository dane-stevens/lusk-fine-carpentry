import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <div className='background__container'>
    <Image />
    <div className='background__overlay'/>
      <h1 className='hero'>
        Making Your Dreams <div style={{ fontSize: '1.4em' }}>Reality</div>
      </h1>
    </div>
  <Layout>
    <SEO title="Home" />
    
      
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  </>
)

export default IndexPage
