import React, { useEffect } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { useGetDish } from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import image from "../../assets/dish-Background-Image1.jpg"
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

  if ( isLoading && !image) return <Spinner />
  return (
    <Layout>
      {image && data ?
        <div className={styles.container} style={{ backgroundImage: `url(${image})` }}>
          <div className={styles.miniContainer}>
            <h2 className={styles.title}>{data?.title}</h2>
            <div className={styles.imageContainer}>
             <div className={styles.imageAndDesContentContainer}>
             <img src={data?.menuimage?.sourceUrl} alt={data?.menuimage?.altText} className={styles.image} />
              <div className={styles.descriptionContainer}>
                <p className={styles.description}>{data?.description}</p>
              </div>
             </div>
            </div>
            <div className={styles.secondContainer}>
              <NavLink className={styles.aAsBtn}
                onClick={goBack}>   <img className={styles.pointingFinger} src='/hand.png' alt="A hand pointing to the left"/>
              </NavLink>
            </div>
          </div>
        </div>
        : <div style={{ backgroundColor: "black", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "2" }}><Spinner /> </div>}
    </Layout>
  );
}


