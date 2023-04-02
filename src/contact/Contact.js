import React from 'react';
import {Spinner} from '../shared/Spinner'
import Layout from '../components/layout'
import { useGetContact} from './_query/useGetContact';
import styles from './contact.module.css'

export const Contact = () => {
  const {data, isLoading} = useGetContact()
  
  if(isLoading) return <Spinner/>
  return (
    <Layout>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8498601498263!2d4.285960943380119!3d51.12574092945093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f2ed903fa9b9%3A0xa6f5bc488e105b17!2sScheldeland!5e0!3m2!1snl!2sbe!4v1670838055770!5m2!1snl!2sbe" style={{ width: "100%", height: "50vh", style: "border:0;" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className={styles.contactContainer}>
   
        <address className={styles.adressContainer}>
        <h2>{data?.title}</h2>
        
          <div className={styles.address}><a href="https://www.google.com/maps?t=m&hl=nl&gl=BE&cid=12030728999397251863" target="_blank">{data?.address}</a></div>
          <div className={styles.city}><a href="https://www.google.com/maps?t=m&hl=nl&gl=BE&cid=12030728999397251863" target="_blank">{data?.city}</a></div>
          <div  className={styles.phone}> <a href="tel:+4733378901" >{data?.phoneNumber}</a></div>
          <div className={styles.mail}><a href="mailto:webmaster@example.com" >{data?.email}</a></div>
        </address>
      </div>
    </Layout>
  );
}
