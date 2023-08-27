import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useGetDish } from './_query';
import Layout from '../components/layout';
import styles from "./dish.module.css";
import { Spinner } from '../shared/Spinner';

export const Dish = ({image}) => {
  const { data, isLoading } = useGetDish()
  const navigate = useNavigate();

  const goBack = ()=>{
    navigate(-1)
  }
  
  useEffect(()=>{
    window.scrollTo(0, 0)
  },[data]);

  if (isLoading && image) return <Spinner />
  return (
    <Layout>
      <div className={styles.container} style={{backgroundImage: `url(${image && image})`}}>
        <div className={styles.miniContainer}>
          <h2 className={styles.title}>{data?.title}</h2>
          <div className={styles.imageContainer}>
            <img src={data?.menuimage?.sourceUrl} alt={data?.menuimage?.altText} className={styles.pic} />
            </div>
          <div className={styles.secondContainer}>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{data?.description}</p>
              {/* <div className={styles.origin}><span style={{ fontWeight: "bold"}} >origin: </span> {data?.origin}</div> */}
        
            </div>
         
            <NavLink className={styles.aAsBtn} 
               onClick={goBack}>   <img className={styles.pointingFinger} src='/hand.png' />
              {/* <div style={{ marginLeft: "1%" }}>Back</div> */}
              </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
}


