import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../../components/layout'
import {
  container,
  miniContainer,
  imageContainer,
  title,
  descriptionContainer,
  origin,
  pic
} from "./wpGrecht.module.css"

const GerechtPage = ({data: {wpGerecht: {gerechtmeta: gerecht}}}) => {
  const image = getImage(gerecht.profilePicture.localFile)
  return (
    <Layout>
    <div className={container}>
    <div className={miniContainer}>
    <h2 className={title}>{gerecht.title}</h2>
    <div className={imageContainer}><GatsbyImage image={image} alt={gerecht.profilePicture.altText} className={pic}/></div>
    <div className={descriptionContainer}> 
    <div>{gerecht.description}</div>
    <div className={origin}>Origin {gerecht.origin}</div>
    </div>


    </div>
    </div>
    </Layout>
  )
}

export const query = graphql` 
  query($slug: String) {
    wpGerecht(slug: {eq: $slug}) {
      gerechtmeta {
        title
        origin
        description
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: DOMINANT_COLOR)
            }
          }
          altText
        }
      }
    }
  }
`

export default GerechtPage