import {gql} from "@apollo/client"

export const GetMainDish = gql`
query {
  hoofdgerechten {
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


export const GetAppetizer = gql`
query {
  kleineHongertjes {
    edges {
      node {
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
`


export const GetMonthlyDish = gql`
query {
  maandelijkseMenus {
    edges {
      node {
        maandelijkseMenuMeta {
          title
          description
          menuImage {
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
`


export const GetSharingFood = gql`
query {
  sharingFoods {
    edges {
      node {
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
  }
}
`


export const GetDessert = gql`
query {
  desserten {
    edges {
      node {
        dessertmeta {
          title
          description
          price
          profilePicture {
            altText
            sourceUrl
          }
        }
        slug
        id
      }
    }
  }
}
`


export const GetKidsMenu = gql`
query {
  kinderMenus {
    edges {
      node {
        kindermenumeta {
          title
          description
          price
          menuimage {
            altText
            sourceUrl
          }
        }
        slug
        id
      }
    }
  }
}
`


export const GetKidsDessert  = gql`
query {
  kinderDesserten {
    edges {
      node {
        kindeDessertMeta {
          title
          description
          price
          menuimage {
            altText
            sourceUrl
          }
        }
        slug
        id
      }
    }
  }
}
`


export const GetSupplement  = gql`
query {
  supplementen {
    edges {
      node {
        SupplementMeta {
          title
        }
      }
    }
  }
}
`
