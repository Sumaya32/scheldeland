import React from 'react';
import { NavLink } from 'react-router-dom';

import { useGetHome } from './_query';
import Layout from '../components/layout';
import {Spinner} from '../shared/Spinner';

import styles from "./index.module.css";

export const Home = () => {
  const { data, isLoading } = useGetHome()
  if(isLoading) return <Spinner/>
  return (
    <Layout>
    <div className={styles.container}>
     <div className={styles.mainImageContainer}> <img src={data?.mainimage?.sourceUrl} alt={data?.mainimage?.altText} className={styles.mainImage}/></div>

      <div className={styles.miniContainer}>
        <h2>{data?.title}</h2>
        <div>{data?.description}</div>
      </div>

      <h1>Top 10 gerechten</h1>
      <div className={styles.gerechtenContainer}>
        {data?.gerechten?.map((item) =>
          <div  key={item.slug} className={styles.gerechtenMiniContainer}>
            <NavLink to={`/gerecht/${item.slug}`} className={styles.link}>
              <img src={item.gerechtmeta.profilePicture?.sourceUrl} className={styles.gerechtenImage} />
              <div className={styles.gerechtTitle}>{item.gerechtmeta.title}</div>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  </Layout>
  );
}


