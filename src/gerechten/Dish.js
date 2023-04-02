import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useGetDish } from './_query';
import Layout from '../components/layout'
import styles from "./dish.module.css"
import { Spinner } from '../shared/Spinner'
import { Modal2 } from '../components/Modal'

export const Dish = () => {
  const { data, isLoading } = useGetDish()
  const navigate = useNavigate();

  if (isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <h2 className={styles.title}>{data?.title}</h2>
          <div className={styles.imageContainer}><img src={data?.profilePicture.sourceUrl} alt={data?.profilePicture.altText} className={styles.pic} /></div>
          <div className={styles.descriptionContainer}>
            <div>{data?.description}</div>
            <div className={styles.origin}>Origin: {data?.origin}</div>
            
            <button className={styles.modalBtn} onClick={() => navigate(-1)}>
            <div className={styles.leftArrow}></div>
           <p>   Back</p>
              </button>
       
       
          </div>
        </div>
      </div>
    </Layout>
  );
}


