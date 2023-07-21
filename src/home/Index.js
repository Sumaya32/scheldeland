import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

import { useGetHome } from './_query';
import Layout from '../components/layout';
import { Spinner } from '../shared/Spinner';

import styles from "./index.module.css";

export const Home = () => {
  const { data, isLoading } = useGetHome()

  if (isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.mainImageContainer}> <img src={data?.mainimage?.sourceUrl} alt={data?.mainimage?.altText} className={styles.mainImage} /></div>

        <div className={styles.descriptionContainer}>
          <h2>{data?.title}</h2>
          <div>{data?.description}</div>
        </div>

        <h1>Top 10 gerechten</h1>
        <div className={styles.dishesContainer}>
          {data?.gerechten?.map((item) =>
            <div key={item.slug} className={styles.dishesMiniContainer}>
              <Link to={`${"menu"}/${item.slug}`} className={styles.link}>
                <img src={item.gerechtmeta.profilePicture?.sourceUrl} className={styles.dishesImage} />
                <div className={styles.dishesTitle}>{item.gerechtmeta.title}</div>
              </Link>

            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}


