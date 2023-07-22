import { gql } from "@apollo/client"

export const GetAbout = gql`
query {
  page(id: "cG9zdDozOA==") {
    aboutusfields {
      groupaTitle
      groupaDescription
      groupaImage1 {
        sourceUrl
        altText
      }
      groupaImage2 {
        sourceUrl
        altText
      }
      groupaImage3 {
        sourceUrl
        altText
      }
      groupaImage4 {
        sourceUrl
        altText
      }
      groupbTitle
      groupbDescription
      groupbImage1 {
        sourceUrl
        altText
      }
      groupbImage2 {
        sourceUrl
        altText
      }
      groupbImage3 {
        sourceUrl
        altText
      }
      groupbImage4 {
        sourceUrl
        altText
      }
      groupbImage5 {
        sourceUrl
        altText
      }
    }   
  }
}
`