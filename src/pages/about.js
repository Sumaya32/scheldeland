import * as React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout';
import Modal from 'react-modal';
import { StaticImage } from "gatsby-plugin-image"
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
  missionImage,
  miniImage,
  clickableImages,
  toughableImage,
  modalBtn,
} from "./about.module.css"

const AboutPage = ({ data: { wpPage: { aboutusfields: about } } }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  const [modalIsOpen2, setIsOpen2] = React.useState(false)
  const [modalIsOpen3, setIsOpen3] = React.useState(false)
  const [modalIsOpen4, setIsOpen4] = React.useState(false)
  const [modalIsOpen5, setIsOpen5] = React.useState(false)
  const [modalIsOpen6, setIsOpen6] = React.useState(false)
  const [modalIsOpen7, setIsOpen7] = React.useState(false)
  const [modalIsOpen8, setIsOpen8] = React.useState(false)

  //const goalPicture = getImage(about.goalPicture.localFile)
  const personeel1 = getImage(about.goalPicture.localFile)
  const personeel2 = getImage(about.personeel2.localFile)
  const personeel3 = getImage(about.personeel3.localFile)
  const personeel4 = getImage(about.personeel4.localFile)

  const sfeer1 = getImage(about.sfeer1.localFile)
  const sfeer2 = getImage(about.sfeer2.localFile)
  const sfeer3 = getImage(about.sfeer3.localFile)
  const sfeer4 = getImage(about.sfeer4.localFile)

  //<GatsbyImage image={personeel1} alt={about.goalPicture.altText}  className={goalImage}/>

// imgStyle={{objectFit: "fill", objectPosition: "50% 50%"}}
  const customStyles = {
    content: {
      top: '53%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
     backgroundColor: "rgb(233, 229, 229)"
    },
  };
  /*
              <GatsbyImage image={sfeer1} alt={about.sfeer1.altText} className={missionImage} />
            <GatsbyImage image={sfeer2} alt={about.sfeer2.altText} className={missionImage} />
            <GatsbyImage image={sfeer3} alt={about.sfeer3.altText} className={missionImage} />
            <GatsbyImage image={sfeer4} alt={about.sfeer4.altText} className={missionImage} />
  */

  return (
    <Layout>
      <div className={container}>
        <h2 className={title}>{about.goalTitle}</h2>
        <div className={goalContainer}>

          <div className={goalDescription}>{about.goalDescription}</div>
          <div className={groupGoalPic}>
            <div onClick={() => setIsOpen(true)} style={{ cursor: "pointer" }} className={clickableImages} ><GatsbyImage image={personeel1} alt={about.goalPicture.altText} className={goalImage} /></div>
            <div onClick={() => setIsOpen2(true)} style={{ cursor: "pointer" }} className={clickableImages} ><GatsbyImage image={personeel2} alt={about.goalPicture.altText} className={goalImage} /></div>
            <div onClick={() => setIsOpen3(true)} style={{ cursor: "pointer" }} className={clickableImages}><GatsbyImage image={personeel3} alt={about.goalPicture.altText} className={goalImage} /></div>
            <div onClick={() => setIsOpen4(true)} style={{ cursor: "pointer" }} className={clickableImages}> <GatsbyImage image={personeel4} alt={about.goalPicture.altText} className={goalImage} /></div>
          </div>
        </div>

        <h2 className={missionTitle}>{about.missionTitle}</h2>
        <div className={missionContainer}>
          <div className={groupMissionPic}>

            <div onClick={() => setIsOpen5(true)} style={{ cursor: "pointer" }} className={toughableImage}> <GatsbyImage image={sfeer1} alt={about.sfeer1.altText} className={missionImage}  imgStyle={{objectFit: "fill", objectPosition: "50% 50%"}}/></div>
            <div onClick={() => setIsOpen6(true)} style={{ cursor: "pointer" }} className={toughableImage}>  <GatsbyImage image={sfeer2} alt={about.sfeer2.altText} className={missionImage} imgStyle={{objectFit: "fill", objectPosition: "50% 50%"}} /></div>
            <div onClick={() => setIsOpen7(true)} style={{ cursor: "pointer" }} className={toughableImage}><GatsbyImage image={sfeer3} alt={about.sfeer3.altText} className={missionImage} imgStyle={{objectFit: "fill", objectPosition: "50% 50%"}}/></div>
            <div onClick={() => setIsOpen8(true)} style={{ cursor: "pointer" }} className={toughableImage}> <GatsbyImage image={sfeer4} alt={about.sfeer4.altText} className={missionImage} imgStyle={{objectFit: "fill", objectPosition: "50% 50%"}} /></div>

          </div>
          <div className={missionDescription}>{about.missionDescription}</div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onClose={modalIsOpen}
          onRequestClose={modalIsOpen}

        >
          <div ><GatsbyImage image={personeel1} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen(false)} className={modalBtn}>Close</button>
        </Modal>

        <Modal
          isOpen={modalIsOpen2}
          style={customStyles}
        >
          <div ><GatsbyImage image={personeel2} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen2(false)} className={modalBtn}>Close</button>
        </Modal>


        <Modal
          isOpen={modalIsOpen3}
          style={customStyles}
        >
          <div ><GatsbyImage image={personeel3} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen3(false)} className={modalBtn}>Close</button>
        </Modal>


        <Modal
          isOpen={modalIsOpen4}
          style={customStyles}
        >
          <div ><GatsbyImage image={personeel4} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen4(false)} className={modalBtn}>Close</button>
        </Modal>

        
        <Modal
          isOpen={modalIsOpen5}
          style={customStyles}
        >
          <div ><GatsbyImage image={sfeer1} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen5(false)} className={modalBtn}>Close</button>
        </Modal>

        <Modal
          isOpen={modalIsOpen6}
          style={customStyles}
        >
          <div ><GatsbyImage image={sfeer2} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen6(false)} className={modalBtn}>Close</button>
        </Modal>

        <Modal
          isOpen={modalIsOpen7}
          style={customStyles}
        >
          <div ><GatsbyImage image={sfeer3} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen7(false)} className={modalBtn}>Close</button>
        </Modal>

        <Modal
          isOpen={modalIsOpen8}
          style={customStyles}
        >
          <div ><GatsbyImage image={sfeer4} alt={about.goalPicture.altText} className={miniImage} /></div>
          <button onClick={() => setIsOpen8(false)} className={modalBtn}>Close</button>
        </Modal>

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
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          altText
        }
        goalDescription
        missionTitle

        sfeer1{
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        missionDescription
        personeel1 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }

        personeel2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        personeel3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        personeel4 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }          
         sfeer2 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        sfeer3 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
              )
              fluid(maxWidth: 100, quality: 90) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
          sfeer4 {
          altText
          localFile {
            childImageSharp {
              gatsbyImageData(
                placeholder: BLURRED
                layout: CONSTRAINED
                 transformOptions: {cropFocus: CENTER, fit: FILL}
        
              )
              fluid(maxWidth: 100, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        
        
      }
    }
}
`

export default AboutPage