import {gql} from "@apollo/client"

export const GetAbout = gql`
query {
  page(id: "cG9zdDozOA==") {
    aboutusfields {
      goalTitle
      goalPicture {
        altText
        sourceUrl
      }
      goalDescription
      missionTitle
      sfeer1 {
        altText
        sourceUrl
      }
      missionDescription
      personeel1 {
        altText
        sourceUrl
      }
      personeel2 {
        altText
        sourceUrl
      }
      personeel3 {
        altText
        sourceUrl
      }
      personeel4 {
        altText
        sourceUrl
      }
      sfeer2 {
        altText
        sourceUrl
      }
      sfeer3 {
        altText
        sourceUrl
      }
      sfeer4 {
        altText
        sourceUrl
      }
    }
  }
}
`