import React from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom'
import { useGetDish } from './_query';
import Layout from '../components/layout'
import styles from "./dish.module.css"
import { Spinner } from '../shared/Spinner'

export const Dish = () => {
  const { data, isLoading } = useGetDish()
  const navigate = useNavigate();

  const goBack = ()=>{
    navigate(-1)
  }
  
  if (isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.miniContainer}>
          <h2 className={styles.title}>{data?.title}</h2>
          <div className={styles.imageContainer}><img src={data?.profilePicture.sourceUrl} alt={data?.profilePicture.altText} className={styles.pic} /></div>
          <div className={styles.underContainer}>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{data?.description}</p>
              <div className={styles.origin}><span style={{ fontWeight: "bold"}} >origin: </span> {data?.origin}</div>
              <NavLink className={styles.aAsBtn} 
               onClick={goBack}>
              <img className={styles.pointingFinger} src='/pointing_finger.png' />
              {/* <div style={{ marginLeft: "1%" }}>Back</div> */}
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}


