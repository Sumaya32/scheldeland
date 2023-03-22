import * as React from 'react'
import Layout from '../components/layout';
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import {
  container,
  mainImage,
  miniContainer,
  gerechtenContainer,
  gerechtenMiniContainer,
  gerechtenImage,
  gerechtTitle,
  link,
  mainImageContainer,
} from "./index.module.css"

const IndexPage = ({ data: { wpPage: { homefiled: item } } }) => {
  const image = getImage(item.mainimage.localFile)

  return (
    <Layout>
      <div className={container}>
       <div className={mainImageContainer}> <GatsbyImage image={image} alt={item.mainimage.altText} className={mainImage}/></div>

        <div className={miniContainer}>
          <h2>{item.title}</h2>
          <div>{item.description}</div>
        </div>

        <h1>Top 10 gerechten</h1>
        <div className={gerechtenContainer}>
          {item.gerechten.map((item) =>
            <div className={gerechtenMiniContainer}>
              <Link to={`/gerechten/${item.slug}`} className={link}>
                <GatsbyImage image={item.gerechtmeta.profilePicture.localFile.childImageSharp.gatsbyImageData} className={gerechtenImage} />
                <div className={gerechtTitle}>{item.gerechtmeta.title}</div>
              </Link>

            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}


export const query = graphql`
  query{
    wpPage(slug: {eq: "home"}) {
      homefiled {
        title
        description
        mainimage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                height:400
                width: 1350
                quality: 100
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
        gerechten {
          ... on WpGerecht {
            id
            slug
            gerechtmeta {
              profilePicture {
                localFile {
                  childImageSharp {
                    gatsbyImageData(
                      placeholder: BLURRED
                      layout: CONSTRAINED
                      height: 120
                      width: 180
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
              title
            }
          }
        }
      }
    }
}
`

export default IndexPage