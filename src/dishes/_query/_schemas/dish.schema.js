import {gql} from "@apollo/client"

export const GetDish = gql`
query NewQuery($slug: ID!) {
  hoofdgerecht(id: $slug, idType: SLUG) {
    gerechtmeta {
      title
      origin
      description
      menuimage {
        sourceUrl
        altText
      }
    }
  }
}
`