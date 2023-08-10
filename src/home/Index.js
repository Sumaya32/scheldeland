import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useGetHome } from './_query';
import Layout from '../components/layout';
import { Spinner } from '../shared/Spinner';

import styles from "./index.module.css";

export const Home = () => {
  const { data, isLoading } = useGetHome();

  if (isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.mainImageContainer}> <img src={data?.mainimage?.sourceUrl} alt={data?.mainimage?.altText} className={styles.mainImage} /></div>

        <div className={styles.descriptionContainer}>
          <h2>{data?.title}</h2>
          <div>{data?.description}</div>
        </div>

        <div className={styles.containerImage}><h1 className={styles.topTitle}>Top 3 gerechten</h1></div>
        <div className={styles.dishesContainer}>

          {data?.gerechten?.map((item) =>
            <div key={item.slug} className={styles.dishesMiniContainer}>
              <Link to={`${"menu"}/${item.slug}`} className={styles.link}>
                <img src={item.gerechtmeta?.menuimage?.sourceUrl} className={styles.dishesImage} />
                <div className={styles.dishesTitle}>{item.gerechtmeta?.title}</div>
                <p className={styles.price}>{item.gerechtmeta?.price}</p>
              </Link>
            </div>
          )}
        </div>

        <div className={styles.containerSharingFoodImage}>
          <h1 className={styles.sharingTopTitle}>Top 3 Sharing food</h1>

        </div>        <div className={styles.dishesContainer}>
          {data?.sharingfood?.map((item) =>
            <div key={item.slug} className={styles.dishesMiniContainer}>
              <Link to={`${"menu"}/${item.slug}`} className={styles.link}>
                <img src={item?.sharingFoodmeta?.menuimage?.sourceUrl} className={styles.dishesImage} />
                <div className={styles.dishesTitle}>{item.sharingFoodmeta?.title}</div>
                <p className={styles.price}>{item.sharingFoodmeta?.price}</p>
              </Link>

            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}


