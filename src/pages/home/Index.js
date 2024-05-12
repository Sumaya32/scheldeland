import React from 'react';
import { useGetHome } from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import { Carousel } from '../../components/Carousel';
import { Error } from '../../components/Error';
import image from "../../assets/homeBackgroundImage.jpg"
import styles from "./index.module.css";


export const Home = () => {
  const { data, isLoading } = useGetHome();
  
  if (image && isLoading && !data) return <Spinner />

  return (
    <>
      { 
      data && image ?
     
        <Layout>
          <div className={styles.container}>

            <div className={styles.mainFixedImageContainer}>
              <div className={`${styles.mainImageContainer} ${styles.mainFixedImage}`}>
              <div className={`${styles.mainFixedImage}`} style={{ backgroundImage: `url(${image})` }}>  </div>
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
