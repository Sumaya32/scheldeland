import React from 'react';
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
import image from '../../assets/oldPaperSheet.png'
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

  if (mainDishLoading && sharingFoodLoading && image) return <Spinner />
  return (
    <Layout>
      <div className={styles.container}>
        {sharingFood && image ?
          <>
            <div className={styles.backgroundImageContainer} style={{ backgroundImage: ` url(${image})` }}>

              <h2 className={styles.headTitle}>Sharing food</h2>
              <img className={styles.forkAndKnife} src={'/fork-knife.png'} />

              <div className={styles.contentContainer}>
                <div className={styles.miniContainer}>

                  {sharingFood?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const sharingFoods = item.node.sharingFoodmeta;
                    const id = item.node.id;
                    return <div  className={styles.allMenus}>
                      <div key={id} className={styles.menuNavLink}>
                        <div className={styles.dishTitle}>{sharingFoods.title}</div>
                        <div className={styles.dishDescription}>{sharingFoods.menudescription}</div>
                      </div>
                    </div>
                  })}

                </div>
                <img src='./line.png' className={styles.menuLineImage} />
              </div>
            </div>

            <div className={styles.backgroundImageContainer} style={{ backgroundImage: ` url(${image})` }}>
              <h2 className={styles.headTitle}>Kleine honger</h2>
              <img className={styles.forkAndKnife} src={'/fork-knife.png'} />
              <div className={styles.contentContainer}>
                <div className={styles.miniContainer}>
                  {appetizer?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const appetizers = item.node.kleinehongermeta;
                    const id = item.node.id;
                    return <div className={styles.allMenus}>
                      <div  key={id} className={styles.menuNavLink}>
                        <div className={styles.dishTitle}>{appetizers.title}</div>
                        <div className={styles.dishDescription}>{appetizers.menudescription}</div>
                      </div>
                    </div>
                  })}
                </div>
                <img src='./line.png' className={styles.menuLineImage} />
              </div>
            </div>

            <div className={styles.backgroundImageContainer} style={{ backgroundImage: ` url(${image})` }}>
              <h2 className={styles.headTitle}>Hoofdgerechten</h2>
              <img className={styles.forkAndKnife} src={'/fork-knife.png'} />

              <div className={styles.contentContainer}>
                <div className={`${styles.miniContainer} ` + `${styles.mainDishContainer}`}>
                  {mainDish?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const gerecht = item.node.gerechtmeta;
                    const id = item.node.id;
                    return <div className={styles.allMenus}>
                      <div key={id} className={styles.menuNavLink}>
                        <div className={styles.dishTitle}>{gerecht.title}</div>
                        <div className={styles.dishDescription}>{gerecht.menudescription}</div>
                      </div>
                    </div>
                  })}


           
                </div>
                <div className={styles.extraInfo}><p>Alle steaks zijn te verkrijgen met Bearnaisesaus, pepersaus of Champignonsaus</p>  </div>


                <h3 className={styles.supplementHeadTitle}>Supplementen</h3>
                <div className={styles.supplementContainer}>
                  {supplement?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const supplements = item?.node.SupplementMeta;
                    const id = item?.node.id;

                    return <div className={styles.supplementMiniContainer}>
                      {item !== supplement[supplement.length - 1] ?
                        <p key={id}className={styles?.supplementTitle}>{supplements.title},</p>
                        : <p key={id} className={styles.supplementTitle} >of {supplements.title}</p>
                      }
                    </div>
                  })}
                </div>

                <h3 className={styles.kisdMenuTitle}>Voor de allerkleinsten</h3>
                <div className={styles.miniContainer}>
                  {kidsMenu?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const kisdMenus = item.node?.kindermenumeta;
                    const id = item?.node.id;
                    return <div className={styles.allMenus}>
                      <div key={id} className={styles.menuNavLink}>
                        <div className={styles.dishTitle}>{kisdMenus?.title}</div>
                        <div className={styles.dishDescription} >{kisdMenus?.description}</div>
                      </div>
                    </div>
                  })}
                </div>
                <img src='./line.png' className={styles.menuLineImage} />
              </div>
            </div>

            <div className={styles.backgroundImageContainer} style={{ backgroundImage: ` url(${image})` }}>
              <h2 className={`${styles.headTitle} ${styles.desertTitle}`} >Maandelijkse Menus</h2>
              <img className={styles.forkAndKnife} src={'/fork-knife.png'} />
              <div className={styles.contentContainer}>
                <div className={styles.miniContainer}>
                  {monthlyDish?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const monthlyDishs = item.node.maandelijkseMenuMeta;
                    const id = item?.node.id;
                    return <div className={styles.allMenus}>
                      <div key={id} className={styles.menuNavLink}>
                        <div className={`${styles.dishTitle}`} >{monthlyDishs.title}</div>
                        <div className={styles.dishDescription}>{monthlyDishs.minidescription}</div>
                      </div>
                    </div>

                  })}
                </div>
                <img src='./line.png' className={styles.menuLineImage} />
              </div>
            </div>

            <div className={styles.backgroundImageContainer} style={{ backgroundImage: ` url(${image})` }}>
              <h2 className={`${styles.headTitle} ${styles.desertTitle}`} >Dessert</h2>
              <img className={styles.forkAndKnife} src={'/fork-knife.png'} />
              <div className={styles.contentContainer} >
                <div className={styles.miniContainer}>
                  {dessert?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const desserts = item.node.dessertmeta;
                    const id = item?.node.id;
                    return <div className={styles.allMenus}>
                      <div key={id} className={styles.menuNavLink} >
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
                  {kidsDessert?.sort((a,b)=> a?.node.gerechtmeta.title < b?.node.gerechtmeta.title ? -1 : 1).map((item) => {
                    const kidsDesserts = item.node?.kindeDessertMeta;
                    const id = item?.node.id;
                    return <div  className={styles.allMenus}>
                      <div key={id} className={styles.menuNavLink}>
                        <div className={styles.dishTitle}>{kidsDesserts?.title}</div>
                        <div className={styles.dishDescription}>{kidsDesserts?.description}</div>
                      </div>
                    </div>
                  })}
                </div>
                <img src='./line.png' className={styles.menuLineImage} />
              </div>
            </div>
          </>
          :
          <div style={{ backgroundColor: "black", width: "100%", height: "100%", position: "absolute", top: "0", zIndex: "1" }}><Spinner /> </div>}

      </div>
    </Layout >
  );
}


/*
If we change our mainds and we want to add in the future a price in the menu
<div className={styles.price} key={item.node.id}>{item2.price}</div>  
*/