import React, { useEffect, useState } from 'react';
import {
  useGetMainDish,
  useGetDessert,
  useGetAppetizer,
  useGetMonthlyDish,
  useGetSharingFood,
  useGetKidsMenu,
  useGetKidsDessert,
  useGetSupplement
} from './_query';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import { Error } from '../../components/Error';
import image from "../../assets/menuBackgroundImage.jpg";
import styles from "./dishes.module.css"


export const Dishes = () => {
  const { mainDish, mainDishLoading } = useGetMainDish();
  const { dessert } = useGetDessert();
  const { appetizer } = useGetAppetizer();
  const { monthlyDish } = useGetMonthlyDish();
  const { sharingFood, sharingFoodLoading } = useGetSharingFood();
  const { kidsMenu } = useGetKidsMenu();
  const { kidsDessert } = useGetKidsDessert();
  const { supplement } = useGetSupplement();
  /*Usestates arrays*/
  const [mainDishDescArray, setMainDishDescArray] = useState();
  const [dessertDescArray, setDessertDescArray] = useState();
  const [sharingFoodDescArray, setSharingFoodDescArray] = useState();
  const [appetizerDescArray, setAppetizerDescArray] = useState();
  const [kidsMenuDescArray, setKidsMenuDescArray] = useState();
  const [kidsDessertDescArray, setKidsDessertDescArray] = useState();
  const [supplementDescArray, setSupplementDescArray] = useState();

  useEffect(() => {
    if (mainDish) { setMainDishDescArray([...mainDish]) }
    if (dessert) { setDessertDescArray([...dessert]) }
    if (sharingFood) { setSharingFoodDescArray([...sharingFood]) }
    if (appetizer) { setAppetizerDescArray([...appetizer]) }
    if (kidsMenu) { setKidsMenuDescArray([...kidsMenu]) }
    if (kidsDessert) { setKidsDessertDescArray([...kidsDessert]) }
    if (supplement) { setSupplementDescArray([...supplement]) }
  }, [mainDish, mainDishLoading, sharingFood, dessert, appetizer,
    monthlyDish, kidsMenu, kidsDessert, supplement]);
   
    if (sharingFoodLoading) return <Spinner />
  return (
    <>
      {
        sharingFood && image ?
          <Layout>
            <div className={styles.container} >
              <div className={`${styles.mainFixedImage}`} style={{ backgroundImage: `url(${image})` }}>  </div>

              <div className={styles.miniSContainer}>

                <div className={`${styles.backgroundImageContainer} ${styles.sharingContainer} `} >
                  <h2 className={styles.headTitle} style={{ fontFamily: "Dancing Script, cursive" }}>Sharing food</h2>
                  <div className={`${styles.contentContainer} ${styles.contentContainerSharing}`} >
                    <div className={styles.miniContainer}>
                      {sharingFoodDescArray && sharingFoodDescArray
                        .filter((item) => item.node.sharingFoodmeta.visible !== null && item.node.sharingFoodmeta.visible[0] !== "Invisible")
                        .sort((a, b) => a?.node.sharingFoodmeta.title < b?.node.sharingFoodmeta.title ? -1 : 1)
                        .map((item, index) => {
                        const sharingFoods = item.node.sharingFoodmeta;
                        const id = item.node.id;
                        return <div className={styles.allMenus} key={id}>
                          <div  className={styles.menuNavLink}>
                            <div className={styles.dishTitle}>{sharingFoods.title}</div>
                            <div className={styles.dishDescription}>{sharingFoods.menudescription}</div>
                          </div>
                        </div>
                      })}

                    </div>
                  </div>
                </div>

                <div className={`${styles.backgroundImageContainer} ${styles.appetizerContainer}`} >
                  <h2 className={styles.headTitle}>Kleine honger</h2>
                  <div className={styles.contentContainer}>
                    <div className={styles.miniContainer}>
                      {appetizerDescArray && appetizerDescArray
                      .filter((item) => item.node.kleinehongermeta.visible !== null && item.node.kleinehongermeta.visible[0] !== "Invisible")
                      .sort((a, b) => a?.node.kleinehongermeta.title < b?.node.kleinehongermeta.title ? -1 : 1)
                      .map((item, index) => {
                        const appetizers = item.node.kleinehongermeta;
                        const id = item.node.id;
                        return <div className={styles.allMenus} key={id}>
                          <div className={styles.menuNavLink}>
                            <div className={styles.dishTitle}>{appetizers.title}</div>
                            <div className={styles.dishDescription}>{appetizers.menudescription}</div>
                          </div>
                        </div>
                      })}
                    </div>
                  </div>
                </div>

                <div className={`${styles.backgroundImageContainer} ${styles.mainDishContainer}`}>
                  <h2 className={styles.headTitle}>Hoofdgerechten</h2>
                  <div className={styles.contentContainer}>
                    <div className={`${styles.miniContainer}`}>
                      { mainDishDescArray && mainDishDescArray
                      .filter((item) => item.node.gerechtmeta.visible !== null && item.node.gerechtmeta.visible[0] !== "Invisible")
                      .sort((a, b) => a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1)
                      .map((item, index) => {
                        const gerecht = item.node.gerechtmeta;
                        const id = item.node.id;
     
                        return <div className={styles.allMenus} key={id}>
                          <div className={styles.menuNavLink}>
                            <div className={styles.dishTitle}>{gerecht.title}</div>
                            <div className={styles.dishDescription}>{gerecht.menudescription}</div>
                          </div>       
                        </div>
                      })}                      
                    </div>
                    <div className={styles.extraInfo}><p>Alle steaks zijn te verkrijgen met Bearnaisesaus, pepersaus of Champignonsaus</p>  </div>
                  </div>

                  <h3 className={styles.supplementHeadTitle}>Supplementen</h3>
                  <div className={styles.supplementContainer}>
                    {supplementDescArray?.sort((a, b) => a?.node.SupplementMeta.title < b?.node.SupplementMeta.title ? -1 : 1).map((item) => {
                      const supplements = item?.node.SupplementMeta;
                      const id = item?.node.id;

                      return <div className={styles.supplementMiniContainer} key={id}>
                        {item !== supplementDescArray[supplementDescArray.length - 1] ?                   
                          <p key={id} className={styles?.supplementTitle}>{supplements.title},</p>
                          : <p key={id} className={styles?.supplementTitle} > of {supplements.title}</p>
                        }
                      </div>
                    })}
                  </div>

                  <h3 className={styles.kisdMenuTitle}>Voor de allerkleinsten</h3>
                  <div className={styles.miniContainer}>
                    {kidsMenuDescArray?.sort((a, b) => a?.node.kindermenumeta.title < b?.node.kindermenumeta.title ? -1 : 1).map((item) => {
                      const kisdMenus = item.node?.kindermenumeta;
                      const id = item?.node.id;
                      return <div className={styles.allMenus}  key={id}>
                        <div className={styles.menuNavLink}>
                          <div className={styles.dishTitle}>{kisdMenus?.title}</div>
                          <div className={styles.dishDescription} >{kisdMenus?.description}</div>
                        </div>
                      </div>
                    })}
                  </div>
                </div>

                <div className={`${styles.backgroundImageContainer} ${styles.deserContainer}`}>
                  <h2 className={`${styles.headTitle} ${styles.desertTitle}`} >Dessert</h2>
                  <div className={styles.contentContainer} >
                    <div className={styles.miniContainer}>
                      {dessertDescArray?.sort((a, b) => a?.node.dessertmeta.title < b?.node.dessertmeta.title ? -1 : 1).map((item) => {
                        const desserts = item.node.dessertmeta;
                        const id = item?.node.id;
                        return <div className={styles.allMenus} key={id}>
                          <div  className={styles.menuNavLink} >
                            <div className={`${styles.dishTitle}`}>{desserts.title}</div>
                            <div className={styles.dishDescription} >{desserts.minidescription}</div>
                          </div>
                        </div>
                      })}
                    </div>
                  </div>

                  <h3 className={styles.kisdMenuTitle}>Voor de allerkleinsten</h3>
                  <div className={styles.contentContainer} >
                    <div className={styles.miniContainer}>
                      {kidsDessertDescArray?.sort((a, b) => a?.node.kindeDessertMeta.title < b?.node.kindeDessertMeta.title ? -1 : 1).map((item) => {
                        const kidsDesserts = item.node?.kindeDessertMeta;
                        const id = item?.node.id;
                        return <div className={styles.allMenus} key={id}>
                          <div className={styles.menuNavLink}>
                            <div className={styles.dishTitle}>{kidsDesserts?.title}</div>
                            <div className={styles.dishDescription}>{kidsDesserts?.description}</div>
                          </div>
                        </div>
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout >
          : <Error />
      }
    </>
  );
}


/*
If we change our mainds and we want to add in the future a price in the menu
<div className={styles.price} key={item.node.id}>{item2.price}</div>  
*/