import React, { useEffect, useState } from 'react';
import { useGetAbout } from './_query'
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import styles from './about.module.css'
import { Modal2 } from '../../components/Modal'
import image from "../../assets/abotBackgroundImage.jpg";
// import image from "../../assets/flowers-background-image.jpg";
import { Error } from '../../components/Error';

export const About = () => {
  const { data, isLoading } = useGetAbout()
  const [employeePictures, setEmployeePicture] = useState([])
  const [customersPictures, setCustomersPictures] = useState([])
  const [visiblePicture, setVisiblePicture] = useState([])
  const [modalIsOpen, setIsOpen] = useState(false)

  const handleChild = () => {
    setIsOpen(false)
  };

  useEffect(() => {
    data && Object.entries(data)?.map(([item, index]) => {
      return setEmployeePicture([
        { picture: `${item?.groupAImage}${index?.sourceUrl}` }
      ])
    })

    setEmployeePicture([
      data !== null &&
      // { picture: data?.groupaImage1?.sourceUrl, altText: data?.groupaImage1.altText },
      { picture: data?.groupaImage5?.sourceUrl, altText: data?.groupaImage5.altText },
      { picture: data?.groupaImage6?.sourceUrl, altText: data?.groupaImage6.altText },
      // { picture: data?.groupaImage2?.sourceUrl, altText: data?.groupaImage2.altText },
      { picture: data?.groupaImage3?.sourceUrl, altText: data?.groupaImage3.altText },
      { picture: data?.groupaImage4?.sourceUrl, altText: data?.groupaImage4.altText },
    ])

    setCustomersPictures([
      { picture: data?.groupbImage1.sourceUrl, altText: data?.groupbImage1.altText },
      { picture: data?.groupbImage2.sourceUrl, altText: data?.groupbImage2.altText },
      { picture: data?.groupbImage3.sourceUrl, altText: data?.groupbImage3.altText },
      // { picture: data?.groupbImage4.sourceUrl, altText: data?.groupbImage4.altText },
      // { picture: data?.groupbImage5.sourceUrl, altText: data?.groupbImage5.altText },
      { picture: data?.groupbImage6.sourceUrl, altText: data?.groupbImage6.altText }
    ])
  }, [data]);

  if (isLoading && image) return <Spinner />
  return (
    <>
      {
        data && image ?
          <Layout>
            <div className={styles.container}>
              <div className={`${styles.mainImageContainer} ${styles.mainFixedImage}`} style={{ backgroundImage: `url(${image})` }}></div>
              <div className={styles.miniContainer}>
                
                <div className={styles.groupAContainer}>
                  <div key={data?.goalDescription} className={styles.groupADescription}>
                    <h2 className={styles.title}>{data?.groupaTitle}</h2>
                    <p className={styles.discriptionParagraph}>
                      {data?.groupaDescription}
                    </p>
                  </div>
                  <div className={styles.groupAImageContainer}>
                    <div className={styles.groupASmallImageContainer}>
                      {employeePictures && employeePictures?.map((item, index) =>
                        <div key={index} onClick={() => { setIsOpen(true); setVisiblePicture((prev) => ({ ...prev, picture: item.picture, altText: item.altText })) }} styles={{ cursor: "pointer" }} className={styles.imageMiniContainer}>
                          <img src={item?.picture} alt={item?.altText} className={styles.groupAImage} />
                        </div>
                      )}

                    </div>
                  </div>
                </div>


                <div className={styles.groupBContainer}>
                  <div className={styles.groupBImageContainer}>
                    <div className={styles.groupBSmallImageContainer}>
                      {customersPictures && customersPictures?.map((item, index) =>
                        <div key={index} onClick={() => { setIsOpen(true); setVisiblePicture((prev) => ({ ...prev, picture: item.picture, altText: item.altText })) }} styles={{ cursor: "pointer" }} className={styles.imageMiniContainer}>
                          <img src={item.picture} alt={item.altText} className={styles.groupBImage} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={styles.groupBDescription}>
                    <h2 className={styles.title}>{data?.groupbTitle}</h2>
                    <p className={styles.discriptionParagraph}>{data?.groupbDescription}</p>
                  </div>

                </div>
                {modalIsOpen && <Modal2 handelclick={handleChild}>
                  <img src={visiblePicture?.picture} alt={visiblePicture?.altText} className={styles.modalImage} />
                </Modal2>}

              </div>
            </div>
          </Layout>
          : <Spinner /> || <Error />
      }
    </>
  );
}


