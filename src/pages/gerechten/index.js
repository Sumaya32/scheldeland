import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const GerechtenPage = ({data: {allWpGerecht: {edges}}}) => {
  return (
    <Layout pageTitle="Scheldeland">
      {edges.map((item) => {
        const gerecht = item.node.gerechtmeta;
        const slug = item.node.slug;
        return <Link to={`/gerechten/${slug}`}>
          <p key={item.node.id}>{gerecht.title}</p>
        </Link>

      })}
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpGerecht {
      edges {
        node {
          gerechtmeta {
            title
            origin
          }
          id
        slug
        }
      }
    }
}

`

export default GerechtenPage