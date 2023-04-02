import {gql} from "@apollo/client"

export const GetDishes = gql`
query {
  array: 
   gerechten {
     edges {
       node {
         gerechtmeta {
           title
           origin
           price
           menudescription
         }
         id
         slug
       }
     }
   }
}
`


// query NewQuery {
//   page(id: "gerechten", idType: URI) {
//     gerechtenfields {
//       title
//       description
//     }
//     slug
//   }
// }
export const GetDessert = gql`
query {
  desserten {
    edges {
      node {
        dessertmeta {
          title
          price
          minidescription
        }
        id
        slug
      }
    }
  }
}
`


