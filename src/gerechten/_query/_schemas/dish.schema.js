import {gql} from "@apollo/client"

// export const GetDish = gql`
// query NewQuery($slug: ID!) {
//   gerecht(id: $slug, idType: SLUG) {
//     gerechtmeta {
//       title
//       origin
//       description
//       profilePicture {
//         sourceUrl
//         altText
//       }
//     }
//   }
// }
// `


export const GetDish = gql`
query NewQuery($slug: ID!) {
  hoofdgerecht(id: $slug, idType: SLUG) {
    gerechtmeta {
      title
      origin
      description
      profilePicture {
        sourceUrl
        altText
      }
    }
  }
}
`