// import { gql } from "@apollo/client"

// export const GetHome = gql`
// query {
//   page(id: "cG9zdDo3MQ==") {
//     homefiled {
//       title
//       description
//       mainimage {
//         sourceUrl
//       }
//       gerechten {
//         ... on Hoofdgerecht {
//           gerechtmeta {
//             title
//             description
//             price
//             origin
//             menuimage {
//               sourceUrl
//             }
//           }
//           id
//           slug
//         }

//       }

//       sharingfood {
//         ... on Sharing_food {
//           sharingFoodmeta {
//             title
//             description
//             price
//             menuimage {
//               altText
//               sourceUrl
//             }
//           }
//         }
//       }
//     }
//   }
// }
// `

import { gql } from "@apollo/client";

export const GetHome = gql`
  query {
    page(id: "cG9zdDo3MQ==") {
      homefiled {
        title
        description
        gerechten {
          ... on Hoofdgerecht {
            id
            gerechtmeta {
              title
              description
              price
              origin
              menuimage {
                sourceUrl
              }
            }
            id
            slug
          }
        }
        sharingfood {
          ... on Sharing_food {
            id
            sharingFoodmeta {
              title
              description
              price
              menuimage {
                altText
                sourceUrl
              }
            }
            id
            slug
          }
        }
        kleinehonger {
          ... on Kleine_honger {
            id
            kleinehongermeta {
              title
              description
              price
              menuimage {
                altText
                sourceUrl
              }
            }
            id
            slug
          }
        }
      }
    }
  }
`;
