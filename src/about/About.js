import React, { useState } from 'react';
import { useGetAbout } from './_query'
import Layout from '../components/layout'
import { Spinner } from '../shared/Spinner'
import style from './about.module.css'
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
      <div className={style.container}>
        <div className={style.miniContainer}>
          <div className={style.groupAContainer}>
            <div key={data?.goalDescription} className={style.groupADescription}>
              <h2 className={style.title}>{data?.goalTitle}</h2>
              <p className={style.discriptionParagraph}>
                {data?.goalDescription}
              </p>
            </div>
            <div className={style.groupAImageContainer}>
              <div className={style.groupASmallImageContainer}>
                {employeePictures && employeePictures?.map((item) =>
                  <div key={item.altText} onClick={() => { setIsOpen(true); setVisiblePicture((prev) => ({ ...prev, picture: item.picture, altText: item.altText })) }} style={{ cursor: "pointer" }} className={style.imageMiniContainer}>
                    <img key={item?.altText} src={item?.picture} alt={item?.altText} className={style.grouAImage} />
                  </div>
                )}
              </div>
            </div>
          </div>


          <div className={style.groupBContainer}>
            <div className={style.groupBImageContainer}>
              <div className={style.groupBSmallImageContainer}>
                {atmospherePictures && atmospherePictures?.map((item) =>
                  <div key={item.altText} onClick={() => { setIsOpen(true); setVisiblePicture((prev) => ({ ...prev, picture: item.picture, altText: item.altText })) }} style={{ cursor: "pointer" }} className={style.imageMiniContainer}>
                    <img key={item.altText} src={item.picture} alt={item.altText} className={style.groupBImage} />
                  </div>
                )}
              </div>
            </div>
            <div className={style.groupBDescription}>
              <h2 className={style.title}>{data?.missionTitle}</h2>
              <p className={style.descriptionParagrapgh}>{data?.missionDescription}</p>
            </div>

          </div>
          {modalIsOpen && <Modal2 handelclick={handleChild}>
            <img src={visiblePicture?.picture} alt={visiblePicture?.altText} className={style.modalImage} />
          </Modal2>}
        </div>
      </div>
    </Layout>
  );
}


