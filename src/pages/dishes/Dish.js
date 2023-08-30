import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink, Link } from 'react-router-dom';
import { useGetDish } from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import image from "../../images/dish-Background-Image.jpg"
import styles from "./dish.module.css";

export const Dish = () => {
  const { data, isLoading } = useGetDish();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [data]);

  if ( isLoading ) return <Spinner />
  return (
    <Layout>
      {image && data?
        <div className={styles.container} style={{ backgroundImage: `url(${data && image})` }}>
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
              </NavLink>
            </div>
          </div>
        </div>
        : <div style={{ backgroundColor: "black", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "1" }}><Spinner /> </div>}
    </Layout>
  );
}

