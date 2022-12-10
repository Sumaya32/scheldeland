import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'

const GerechtPage = ({data: {wpGerecht: {gerechtmeta: gerecht}}}) => {
  return (
    <Layout pageTitle="Gerechten Template">
     <div>{gerecht.title}</div>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    wpGerecht(id: {eq: $id}) {
      gerechtmeta {
        title
        origin
      }
    }    
  }
`

export default GerechtPage