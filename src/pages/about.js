import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import {
  container,
  goalContainer,
  title,
  goalDescription,
  goalImage,
  groupGoalPic,
  missionTitle,
  missionContainer,
  missionDescription,
  groupMissionPic,
  missionImage
} from "./about.module.css"

const AboutPage = ({ data: { wpPage: { aboutusfields: about } } }) => {
  const goalPicture = getImage(about.goalPicture.localFile)
  // const personeel1 = getImage(about.personeel1.localFile)
  const personeel2 = getImage(about.personeel2.localFile)
  const personeel3 = getImage(about.personeel3.localFile)
  const personeel4 = getImage(about.personeel4.localFile)

  const sfeer1 = getImage(about.sfeer1.localFile)
  const sfeer2 = getImage(about.sfeer2.localFile)
  const sfeer3 = getImage(about.sfeer3.localFile)
  const sfeer4 = getImage(about.sfeer4.localFile)

  //<GatsbyImage image={personeel1} alt={about.goalPicture.altText}  className={goalImage}/>

  return (
    <Layout>
      <div className={container}>
        <h2 className={title}>{about.goalTitle}</h2>
        <div className={goalContainer}>

          <div className={goalDescription}>{about.goalDescription}</div>
          <div className={groupGoalPic}>
            <Link to="#"><GatsbyImage image={goalPicture} alt={about.goalPicture.altText} className={goalImage} />    </Link>
            <GatsbyImage image={personeel2} alt={about.goalPicture.altText} className={goalImage} />
            <GatsbyImage image={personeel3} alt={about.goalPicture.altText} className={goalImage} />
            <GatsbyImage image={personeel4} alt={about.goalPicture.altText} className={goalImage} />
          </div>

        </div>

        <h2 className={missionTitle}>{about.missionTitle}</h2>
        <div className={missionContainer}>
          <div className={groupMissionPic}>
            <GatsbyImage image={sfeer1} alt={about.sfeer1.altText} className={missionImage} />
            <GatsbyImage image={sfeer2} alt={about.sfeer2.altText} className={missionImage} />
            <GatsbyImage image={sfeer3} alt={about.sfeer3.altText} className={missionImage} />
            <GatsbyImage image={sfeer4} alt={about.sfeer4.altText} className={missionImage} />
          </div>
          <div className={missionDescription}>{about.missionDescription}</div>
        </div>

      </div>
    </Layout>
  )
}


export const query = graphql`
  query{
    wpPage(slug: {eq: "about-us"}) {
      aboutusfields {
        goalTitle
        goalPicture {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
          altText
        }
        goalDescription
        missionTitle

        sfeer1{
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        missionDescription
        personeel1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        personeel2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        personeel3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        personeel4 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }          
         sfeer2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        sfeer3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
          sfeer4 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        
        
      }
    }
}
`

export default AboutPage