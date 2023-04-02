import {gql} from "@apollo/client"

export const GetHome = gql`
query {
  page(id: "cG9zdDo3MQ==") {
    homefiled {
      title
      description
      mainimage {
        sourceUrl
      }
      gerechten {
        ... on Gerecht {
          id
          slug
          gerechtmeta {
            profilePicture {
              sourceUrl
              altText
            }
            origin
            title
          }
        }
      }
    }
  }
}
`