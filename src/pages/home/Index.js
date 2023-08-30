import React from 'react';
import { NavLink } from 'react-router-dom';
import { useGetHome } from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import { Carousel } from '../../components/Carousel'
import image from "../../images/zwarteVrouw.jpg"
import styles from "./index.module.css";

export const Home = () => {
  const { data, isLoading } = useGetHome();

  if (image && isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        <div className={`${styles.mainImageContainer} ${styles.parallax}`} style={{backgroundImage: `url(${data?.mainimage?.sourceUrl})`}}>
           {/* <img src={data?.mainimage?.sourceUrl} alt={data?.mainimage?.altText} className={styles.mainImage} /> */}
        {/* </div> */}

        {/* <div className={`${styles.secondSectionContainer} ${styles.parallax}`}> */}

       {/* <div className={styles.secondSectionImageContainer}>
       <img src='./taverne.jpg' className={styles.secondSectionImage}/>

       </div> */}
          <div className={styles.descriptionContainer}>
       <h2 className={`${styles.title} ${styles.text}`} >{data?.title }</h2>
          <div className={styles.description}>{data?.description}</div>
       </div>

       </div>

    

        <div className={styles.containerImage}> <h1 className={`${styles.topTitle}`}>Top 3 gerechten</h1>     </div>

            <Carousel items={data && data?.gerechten?.map((item)=> item.gerechtmeta)}  />

         <div className={`${styles.dishesContainer}`}>
          {data?.gerechten?.map((item) =>
            <div key={item.slug} className={styles.card}>
              <NavLink to={`${"menu"}/${item.slug}`} className={styles.link}>
                <img src={item.gerechtmeta?.menuimage?.sourceUrl} className={styles.dishesImage} />
                <div className={styles.dishesTitle}>{item.gerechtmeta?.title}</div>
                <p className={styles.price}>{item.gerechtmeta?.price}</p>
              </NavLink>
            </div>
          )}
        </div> 
   


        {/* <div className={styles.containerSharingFoodImage}><h1 className={styles.sharingTopTitle}>Top 3 Sharing food</h1></div>   */}

        {/* <Carousel items={data && data?.sharingfood?.map((item)=> item.sharingFoodmeta)}  /> */}
        

           {/* <div className={styles.dishesContainer}>
          {data?.sharingfood?.map((item) =>
            <div key={item.slug} className={styles.card}>
              <Link to={`${"menu"}/${item.slug}`} className={styles.link}>
                <img src={item?.sharingFoodmeta?.menuimage?.sourceUrl} className={styles.dishesImage} />
                <div className={styles.dishesTitle}>{item.sharingFoodmeta?.title}</div>
                <p className={styles.price}>{item.sharingFoodmeta?.price}</p>
              </Link>

            </div>
          )}
        </div> */}
   


      </div>
    </Layout>
  );
}

