import React, { useState } from 'react';
// import { NavLink } from 'react-router-dom';
import { useGetHome } from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import { Carousel } from '../../components/Carousel';
import { Error } from '../../components/Error';
import image from "../../assets/mainImage.jpg"
import styles from "./index.module.css";

export const Home = () => {
  const { data, isLoading } = useGetHome();
  const [isImageText, setIsImageText] = useState(false)

  if (image && isLoading && !data) return <Spinner />
  return (
    <Layout>
      {data && image ?
        <div className={styles.container}>

          <div className={styles.mainFixedImageContainer}>
            <div className={`${styles.mainImageContainer} ${styles.mainFixedImage}`} style={{ backgroundImage: `url(${image})` }}>
              <div className={isImageText === true ? `${styles.imageInfoContainer}` : `${styles.hiddenText}`} > <div className={styles.imageInfotext} >Image rights - Krisje Vandegaer</div></div>
            </div>
            <div className={styles.descriptionContainer}>
 
              <h2 className={`${styles.title} ${styles.descriptionTitle}`} >{data?.title}</h2>
              <div className={styles.description}>{data?.description}</div>
            </div>
          </div>

          <div className={styles.CarouselFirstContainer}>
            <div className={styles.middleContainer}>
              <div > <h1 className={`${styles.topTitle}`}>Populaire gerechten</h1>     </div>
              <Carousel items={data && data?.gerechten?.map((item) => item.gerechtmeta)} />
            </div>
          </div>

          <div className={styles.CarouselSecondContainer}>
            <div className={`${styles.middleContainer} ${styles.secondMiddleContainer}`}>
              <div > <h1 className={`${styles.topTitle}`}>Populaire Sharing food</h1>     </div>
              <Carousel items={data && data?.sharingfood?.map((item) => item.sharingFoodmeta)} />
            </div>
          </div>

        </div>
        // : <div style={{ backgroundColor: "black", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "2" }}><Spinner /> </div>
        : <Error/>    
      }
    </Layout>
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