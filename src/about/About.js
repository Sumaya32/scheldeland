import React, { useState } from 'react';
import { useGetAbout } from './_query'
import Layout from '../components/layout'
import { Spinner } from '../shared/Spinner'
import styles from './about.module.css'
import { Modal2 } from '../components/Modal'

export const About = () => {
  const { data, isLoading } = useGetAbout()
  const [employeePictures] = useState([
    { picture: data?.personeel1.sourceUrl, altText: data?.personeel1.altText },
    { picture: data?.personeel2.sourceUrl, altText: data?.personeel2.altText },
    { picture: data?.personeel3.sourceUrl, altText: data?.personeel3.altText }
  ])
  const [atmospherePictures] = useState([
    { picture: data?.sfeer1.sourceUrl, altText: data?.sfeer1.altText },
    { picture: data?.sfeer2.sourceUrl, altText: data?.sfeer2.altText },
    { picture: data?.sfeer3.sourceUrl, altText: data?.sfeer3.altText },
    { picture: data?.sfeer4.sourceUrl, altText: data?.sfeer4.altText }
  ])
  const [visiblePicture, setVisiblePicture] = useState([])
  const [modalIsOpen, setIsOpen] = React.useState(false)

  const handleChild = () => {
    setIsOpen(false)
  };

  if (isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <div className={styles.groupAContainer}>
            <div key={data?.goalDescription} className={styles.groupADescription}>
              <h2 className={styles.title}>{data?.goalTitle}</h2>
              <p className={styles.discriptionParagraph}>
                {data?.goalDescription}
              </p>
            </div>
            <div className={styles.groupAImageContainer}>
              <div className={styles.groupASmallImageContainer}>
                {employeePictures && employeePictures?.map((item) =>
                  <div key={item.altText} onClick={() => { setIsOpen(true); setVisiblePicture((prev) => ({ ...prev, picture: item.picture, altText: item.altText })) }} styles={{ cursor: "pointer" }} className={styles.imageMiniContainer}>
                    <img key={item?.altText} src={item?.picture} alt={item?.altText} className={styles.grouAImage} />
                  </div>
                )}
              </div>
            </div>
          </div>


          <div className={styles.groupBContainer}>
            <div className={styles.groupBImageContainer}>
              <div className={styles.groupBSmallImageContainer}>
                {atmospherePictures && atmospherePictures?.map((item) =>
                  <div key={item.altText} onClick={() => { setIsOpen(true); setVisiblePicture((prev) => ({ ...prev, picture: item.picture, altText: item.altText })) }} styles={{ cursor: "pointer" }} className={styles.imageMiniContainer}>
                    <img key={item.altText} src={item.picture} alt={item.altText} className={styles.groupBImage} />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.groupBDescription}>
              <h2 className={styles.title}>{data?.missionTitle}</h2>
              <p className={styles.descriptionParagrapgh}>{data?.missionDescription}</p>
            </div>

          </div>
          {modalIsOpen && <Modal2 handelclick={handleChild}>
            <img src={visiblePicture?.picture} alt={visiblePicture?.altText} className={styles.modalImage} />
          </Modal2>}
        </div>
      </div>
    </Layout>
  );
}


