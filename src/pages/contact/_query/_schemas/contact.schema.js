import { gql } from "@apollo/client"

export const GetContact = gql`
query {
  page(id: "cG9zdDo3Mg==") {
    contactfield {
      title
      address
      city
      email
      phoneNumber
     
      openingHours{
        monday{
          day
          openingTime
          closingTime
        }
        tuesday{
          day
          openingTime
          closingTime
        }

        wednesday{
          day
          openingTime
          closingTime
        }
        thursday{
          day
          openingTime
          closingTime
        }
        friday{
          day
          openingTime
          closingTime
        }
        saturday{
          day
          openingTime
          closingTime
        }
        sunday{
          day
          openingTime
          closingTime
        }
      }

    }
  }
}
`