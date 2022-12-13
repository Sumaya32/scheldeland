import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'
import {
  container,
  titleMenu,
  allMenus,
  miniContainer,
  menuLine,
  hoofdGerecht,
  gerechtTitle,
  price,
  desserth4
} from "./index.module.css"


const GerechtenPage = ({ data }) => {
  const edgeArray = data.array.edges;
  const item = data.item.gerechtenfields;
  const dessert = data.dessert.edges;
/*
    <div className={gerechtTitle} key={item.node.id}>{item2.title}</div>
                <div key={item.node.id}>{item2.menudescription}</div>
                
              <div className={price} key={item.node.id}>{item2.price}</div>
*/
  return (
    <Layout>
      <div className={container}>
        <h2 className={titleMenu}>{item.title}</h2>
        <h4 className={hoofdGerecht}>Hoofd gerechten</h4>

        <div className={miniContainer}>
          {edgeArray.map((item) => {
            const gerecht = item.node.gerechtmeta;
            const slug = item.node.slug;
            return <div className={allMenus}>
              <Link to={`/gerechten/${slug}`}>
                <div className={gerechtTitle} key={item.node.id}>{gerecht.title}</div>
                <div key={item.node.id}>{gerecht.menudescription}</div>
              </Link>

              <div className={price} key={item.node.id}>{gerecht.price}</div>
            </div>
          })}
        </div>

        <hr className={menuLine}></hr>

        <h4 className={desserth4}>Dessert</h4>

        <div className={miniContainer}>
          {dessert.map((item) => {
            const item2 = item.node.dessertmeta;
            const slug = item.node.slug;
            return <div className={allMenus}>
              <Link to={`/gerechten/${slug}`}>
              <div className={gerechtTitle} key={item.node.id}>{item2.title}</div>
                <div key={item.node.id}>{item2. minidescription}</div>
              </Link>
              <div className={price} key={item.node.id}>{item2.price}</div>
            </div>
            
          })}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
   array: 
    allWpGerecht {
      edges {
        node {
          gerechtmeta {
            title
            origin
            price
            menudescription
          }
          id
          slug
        }
      }
    }
   

  item: 
    wpPage(slug: {eq: "gerechten"}) {
      gerechtenfields {
        title
        description
      }
    }
  

   dessert:  allWpDessert {
    edges {
      node {
        dessertmeta {
          title
          price
          minidescription
        }
        id
        slug
      }
    }
  }

}

`

export default GerechtenPage