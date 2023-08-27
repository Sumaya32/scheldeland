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
import { Spinner } from '../shared/Spinner'
import Layout from '../components/layout'
import image from '../images/oldPaperSheet.png'
import styles from "./dishes.module.css"

export const Dishes = () => {
  const { mainDish, mainDishLoading } = useGetMainDish();
  const { dessert, dessertLoading } = useGetDessert();
  const { appetizer, appetizerLaoding } = useGetAppetizer();
  const { monthlyDish, monthlyDishLoading } = useGetMonthlyDish();
  const { sharingFood, sharingFoodLoading } = useGetSharingFood();
  const { kidsMenu, kidsMenuLoading } = useGetKidsMenu();
  const { kidsDessert, kidsDessertLoading } = useGetKidsDessert();
  const { supplement, supplementLoading } = useGetSupplement();

  if (mainDishLoading && 
    appetizerLaoding && 
    dessertLoading &&
    kidsDessertLoading &&
    kidsMenuLoading &&
    monthlyDishLoading &&
    sharingFoodLoading &&
    supplementLoading && image) return <Spinner />
  
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.smallContainer} style={{backgroundImage: `url(${image && image})`, width: "70%"}}>

          <h2 className={styles.headTitle}>Sharing food</h2>
          <img className={styles.forkAndKnife} src={'/fork-knife.png'} />

          <div className={styles.contentContainer}>
            <div className={styles.miniContainer}>

              {sharingFood?.map((item) => {
                const sharingFoods = item.node.sharingFoodmeta;
                const slug = item.node.slug;
                return <div key={item.node.slug} className={styles.allMenus}>
                  {/* <NavLink className={styles.menuNavLink} to={`/menu/${slug}`} > */}
                  <div className={styles.menuNavLink}>
                    <div className={styles.dishTitle} key={item.node.id}>{sharingFoods.title}</div>
                    <div className={styles.dishDescription} key={item.node.id}>{sharingFoods.menudescription}</div>
                    {/* </NavLink> */}
                  </div>
                </div>
              })}

            </div>
            <img src='./line.png' className={styles.menuLineImage} />
          </div>


          <h2 className={styles.headTitle}>Kleine honger</h2>
          <img className={styles.forkAndKnife} src={'/fork-knife.png'} />

          <div className={styles.contentContainer}>
            <div className={styles.miniContainer}>
              {appetizer?.map((item) => {
                const appetizers = item.node.kleinehongermeta;
                const slug = item.node.slug;
                return <div key={item.node.slug} className={styles.allMenus}>
                  <div className={styles.menuNavLink}>
                    <div className={styles.dishTitle} key={item.node.id}>{appetizers.title}</div>
                    <div className={styles.dishDescription} key={item.node.id}>{appetizers.menudescription}</div>
                  </div>
                </div>
              })}
            </div>
            <img src='./line.png' className={styles.menuLineImage} />
          </div>




          <h2 className={styles.headTitle}>Hoofdgerechten</h2>
          <img className={styles.forkAndKnife} src={'/fork-knife.png'} />

          <div className={styles.contentContainer}>
            <div className={`${styles.miniContainer} ` + `${styles.mainDishContainer}`}>
              {mainDish?.map((item) => {
                const gerecht = item.node.gerechtmeta;
                const slug = item.node.slug;
                return <div key={item.node.slug} className={styles.allMenus}>
                  {/* <NavLink className={styles.menuNavLink} to={`/menu/${slug}`} > */}
                  <div className={styles.menuNavLink}>
                    <div className={styles.dishTitle} key={item.node.id}>{gerecht.title}</div>
                    <div className={styles.dishDescription} key={item.node.id}>{gerecht.menudescription}</div>
                    {/* </NavLink> */}
                  </div>
                </div>
              })}
            </div>
            <div className={styles.extraInfo}><p>Alle steaks zijn te verkrijgen met Bearnaisesaus, pepersaus of Champignonsaus</p>  </div>


            <h3 className={styles.supplementHeadTitle}>Supplementen</h3>
            <div className={styles.supplementContainer}>
              {supplement?.map((item) => {
                const supplements = item.node.SupplementMeta;
                return  <div className={styles.supplementMiniContainer}>
                    {item !== supplement[supplement.length - 1] ?
                      <p className={styles.supplementTitle} key={item.node.id}>{supplements.title},</p>
                      : <p className={styles.supplementTitle} key={item.node.id}>of {supplements.title}</p>
                    }
                  </div>
              })}

            </div>


            <h3 className={styles.kisdMenuTitle}>Voor de allerkleinsten</h3>
            <div className={styles.miniContainer}>
              {kidsMenu?.map((item) => {
                const kisdMenus = item.node?.kindermenumeta;
                const slug = item?.node?.slug;
                return <div key={item.node.slug} className={styles.allMenus}>
                  {/* <NavLink className={styles.menuNavLink} to={`/menu/${slug}`} > */}
                  <div className={styles.menuNavLink}>
                    <div className={styles.dishTitle} key={item.node.id}>{kisdMenus?.title}</div>
                    <div className={styles.dishDescription} key={item.node.id}>{kisdMenus?.description}</div>
                    {/* </NavLink> */}
                  </div>
                </div>
              })}
            </div>
            <img src='./line.png' className={styles.menuLineImage} />
          </div>



          <h2 className={`${styles.headTitle} ${styles.desertTitle}`} >Maandelijkse Menus</h2>
          <img className={styles.forkAndKnife} src={'/fork-knife.png'} />
          <div className={styles.contentContainer}>
            <div className={styles.miniContainer}>
              {monthlyDish?.map((item) => {
                const monthlyDishs = item.node.maandelijkseMenuMeta;
                const slug = item.node.slug;
                return <div className={styles.allMenus}>
                  {/* <NavLink className={styles.menuNavLink} to={`/menu/${id}`}> */}
                  <div className={styles.menuNavLink}>
                    <div className={`${styles.dishTitle}`} key={item.node.id}>{monthlyDishs.title}</div>
                    <div className={styles.dishDescription} key={item.node.id}>{monthlyDishs.minidescription}</div>
                    {/* </NavLink> */}
                  </div>
                </div>

              })}
            </div>
            <img src='./line.png' className={styles.menuLineImage} />
          </div>



          <h2 className={`${styles.headTitle} ${styles.desertTitle}`} >Dessert</h2>
          <img className={styles.forkAndKnife} src={'/fork-knife.png'} />
          <div className={styles.miniContainer}>
            {dessert?.map((item) => {
              const desserts = item.node.dessertmeta;
              const slug = item.node.slug;
              return <div className={styles.allMenus}>
                {/* <NavLink className={styles.menuNavLink} to={`/menu/${id}`}> */}
                <div className={styles.menuNavLink} >
                  <div className={`${styles.dishTitle}`} key={item.node.id}>{desserts.title}</div>
                  <div className={styles.dishDescription} key={item.node.id}>{desserts.minidescription}</div>
                  {/* </NavLink> */}
                </div>
              </div>
            })}
          </div>



          <h3 className={styles.kisdMenuTitle}>Voor de allerkleinsten</h3>
          <div className={styles.miniContainer}>
            {kidsDessert?.map((item) => {
              const kidsDesserts = item.node?.kindeDessertMeta;
              const slug = item?.node?.slug;
              return <div key={item.node.slug} className={styles.allMenus}>
                {/* <NavLink className={styles.menuNavLink} to={`/menu/${slug}`} > */}
                <div className={styles.menuNavLink}>
                  <div className={styles.dishTitle} key={item.node.id}>{kidsDesserts?.title}</div>
                  <div className={styles.dishDescription} key={item.node.id}>{kidsDesserts?.description}</div>
                  {/* </NavLink> */}
                </div>
              </div>
            })}
          </div>

        </div>
      </div>
    </Layout >
  );
}


/*
If we change our mainds and we want to add in the future a price in menu
<div className={styles.price} key={item.node.id}>{item2.price}</div>  
*/