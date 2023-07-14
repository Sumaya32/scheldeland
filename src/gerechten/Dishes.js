import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useGetDishes, useGetItem, useGetDessert } from './_query';
import {Spinner} from '../shared/Spinner'
import Layout from '../components/layout' 
import style from "./dishes.module.css"

export const Dishes = () => {
  const {edgeArray, isLoading} = useGetDishes()
  const {item} = useGetDishes()
  const {dessert} = useGetDessert()
  const {id} = useParams

if(isLoading) return <Spinner/>
  return (
<Layout>
  <div className={style.container}>
  {/* <h2 className={style.titleMenu}>{item.title}</h2> */}

      <h2 className={style.headTitle}>Hoofdgerechten</h2>
<div className={style.smallContainer}>
  
<div className={style.miniContainer}>
        {edgeArray?.map((item) => {
          const gerecht = item.node.gerechtmeta;
          const slug = item.node.slug;
          return <div key={item.node.slug} className={style.allMenus}>
            <NavLink className={style.menuNavLink} to={`/menu/${slug}`} >
              <div className={style.dishTitle} key={item.node.id}>{gerecht.title}</div>
              <div className={style.dishDescription} key={item.node.id}>{gerecht.menudescription}</div>
            </NavLink>

            <div className={style.price} key={item.node.id}>{gerecht.price}</div>
          </div>      
        })}
      </div>

      <h2 className={`${style.headTitle} ${style.desertTitle}`} >Dessert</h2>

      <div className={style.miniContainer}>
        {dessert?.map((item) => {
          const item2 = item.node.dessertmeta;
          const slug = item.node.slug;
          return <div className={style.allMenus}>
            <NavLink className={style.menuNavLink} to={`/menu/${id}`}>
            <div className={`${style.dishTitle}`}  key={item.node.id}>{item2.title}</div>
              <div className={style.dishDescription} key={item.node.id}>{item2. minidescription}</div>
            </NavLink>
            <div className={style.price} key={item.node.id}>{item2.price}</div>
         
          </div>
          
        })}  
      </div>
</div>


    </div>
    </Layout>
  );
}


