import {gql} from "@apollo/client"

export const GetContact = gql`
query {
  page(id: "cG9zdDo3Mg==") {
    contactfield {
      title
      address
      city
      email
      phoneNumber
    }
  }
}
`