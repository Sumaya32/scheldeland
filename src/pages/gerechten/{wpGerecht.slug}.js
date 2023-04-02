import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Image from 'gatsby-image'
import Layout from '../../components/layout';
import Zoom from 'react-medium-image-zoom';
import {
  container,
  miniContainer,
  imageContainer,
  title,
  descriptionContainer,
  origin,
  pic
} from "./wpGrecht.module.css"



const GerechtPage = ({ data: { wpGerecht: { gerechtmeta: gerecht } } }) => {
  const image = getImage(gerecht.profilePicture.localFile)

  const wrapperStyle = {
    width: '100%',
    height: '100%'
  }


  return (
    <Layout>
      <div className={container}>
        <div className={miniContainer}>
          <h2 className={title}>{gerecht.title}</h2>
          <div className={imageContainer}><GatsbyImage fluid={gerecht.profilePicture.localFile.childImageSharp.fluid} image={image} alt={gerecht.profilePicture.altText} className={pic} imgStyle={{ objectFit: 'contain' }} /></div>
          <div className={descriptionContainer}>
            <div>{gerecht.description}</div>
            <div className={origin}>Origin: {gerecht.origin}</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
//formats:[AUTO, WEBP]
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
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                height: 220
                width: 480
                quality: 100
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
          altText
        }
      }
    }
  }
`

export default GerechtPage

/*
 wpGerecht(slug: {eq: $slug}) {
      gerechtmeta {
        title
        origin
        description
        profilePicture {
          localFile {
            childImageSharp {
              gatsbyImageData(
               placeholder: BLURRED)
            }
          }
          altText
        }
      }
    }
*/