import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useGetHome } from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import { Carousel } from '../../components/Carousel';
import { Error } from '../../components/Error';
import image from "../../assets/background-image4.jpg"
import styles from "./index.module.css";


export const Home = () => {
  const { data, isLoading } = useGetHome();
  const [isImageText, setIsImageText] = useState(false)
  
  if (image && isLoading && !data) return <Spinner />
//  <div className={`${styles.mainImageContainer} ${styles.mainFixedImage}`} style={{ backgroundImage: `url(${image})` }}>

  return (
    <>
      { 
      data && image ?
     
        <Layout>
          <div className={styles.container}>

            <div className={styles.mainFixedImageContainer}>
              <div className={`${styles.mainImageContainer} ${styles.mainFixedImage}`}>
                <div className={isImageText === true ? `${styles.imageInfoContainer}` : `${styles.hiddenText}`} > <div className={styles.imageInfotext} >Image rights - Krisje Vandegaer</div></div>
              </div>
              <div className={styles.descriptionContainer}>

                <h2 className={`${styles.title} ${styles.descriptionTitle}`} >{data?.title}</h2>
                <div className={styles.description}>{data?.description}</div>
              </div>
            </div>

            <div className={styles.CarouselFirstContainer}>
              <div className={styles.middleContainer}>
                <div > <h1 className={`${styles.topTitle}`}>Populaire Hoofdgerechten</h1>     </div>
                <Carousel items={data && data?.gerechten?.map((item) => item.gerechtmeta)} />
              </div>
            </div>

            <div className={styles.CarouselFirstContainer}>
              <div className={styles.middleContainer}>
                <div > <h1 className={`${styles.topTitle}`}>Populaire kleine honger</h1>     </div>
                <Carousel 
                items={data && data?.kleinehonger?.map((item) => item.kleinehongermeta)}/>
              </div>
            </div>

            <div className={styles.CarouselSecondContainer}>
              <div className={`${styles.middleContainer} ${styles.secondMiddleContainer}`}>
                <div > <h1 className={`${styles.topTitle}`}>Populaire Sharing food</h1>     </div>
                <Carousel items={data && data?.sharingfood?.map((item) => item.sharingFoodmeta)}/>
              </div>
            </div>

          </div>
        </Layout>
        : <Spinner /> || <Error />
      }
    </>
  );
}



{/* <div className={`${styles.cardContainer}`}>

              {data?.gerechten?.map((item) =>
                <div key={item.slug} className={styles.card}>
                  <NavLink to={`${"menu"}/${item.slug}`} className={styles.link}>
                    <img src={item.gerechtmeta?.menuimage?.sourceUrl} className={styles.dishesImage} />
                    <div className={styles.dishesTitle}>{item.gerechtmeta?.title}</div>
                    <p className={styles.price}>{item.gerechtmeta?.price}</p>
                  </NavLink>
                </div>
              )}
            </div> */}