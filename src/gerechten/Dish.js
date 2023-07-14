import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useGetDish } from './_query';
import Layout from '../components/layout'
import styles from "./dish.module.css"
import { Spinner } from '../shared/Spinner'

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
          <div className={styles.underContainer}>
            <div className={styles.descriptionContainer}>
              <p className={styles.description}>{data?.description}</p>
              <div className={styles.origin}><span style={{ fontWeight: "bold"}} >origin: </span> {data?.origin}</div>
              <a className={styles.aAsBtn} href='http://localhost:3000/menu'>
              <img className={styles.pointingFinger} src='/pointing_finger.png' />
              <div style={{ marginLeft: "1%" }}>Back</div>
            </a>
            </div>
            {/* <button className={styles.modalBtn} onClick={() => navigate(-1)}> */}
            {/* <div className={styles.leftArrow}></div> */}


            {/* <a className={styles.aAsBtn} href='http://localhost:3000/menu'>
              <img style={{ width: "35%", marginLeft: "10%" }} src='/hand.png' />
              <div style={{ marginLeft: "5%" }}>Back</div>
            </a> */}

            {/* </button> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}


