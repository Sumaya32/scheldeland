import React, { useState } from 'react';
import Layout from '../../components/layout';
import { Spinner } from './../../components/shared/Spinner';
import { Error } from '../../components/Error';
import { useGetContact } from './_query/useGetContact';
import styles from './contact.module.css'
export const Contact = () => {
  const { data, isLoading } = useGetContact();
  const [url] = useState('https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8498601498263!2d4.285960943380119!3d51.12574092945093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f2ed903fa9b9%3A0xa6f5bc488e105b17!2sScheldeland!5e0!3m2!1snl!2sbe!4v1670838055770!5m2!1snl!2sbe')

  if (isLoading && url) return <Spinner />
  return (
    <>
      {url && data ?
        <Layout>
          <div className={styles.contactContainer}>

            <div className={styles.iframeContainer} >
              <iframe src={url && url}
                className={styles.iframe}
                allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"
                onScroll="no" title='Google map'>
              </iframe>
            </div>

            <div className={styles.smallContainer}>
              <div className={styles.adressContainer}>
                <h2>Contacteer ons of kom langs</h2>

                <div className={styles.adressMiniContainer}>
                  <div className={styles.address}>
                    <img style={{ width: "25px", height: "30px" }} src='./location.png' alt='Location'/>
                    <a href="https://goo.gl/maps/HchfKAeoESF69L5p7" target="_blank" rel="noreferrer">
                      <div> {data?.address}</div>
                      <div> {data?.city}</div>
                    </a>
                  </div>

                  <div className={styles.phone}>
                    <img style={{ width: "25px", height: "30px" }} src='./mobile.png' alt='Phone'/>
                    <a href="tel:+476989330" >Reserveren via<br />{data?.phoneNumber}</a>
                  </div>

                </div>
              </div>

              <div className={styles.openingHours}>
                <h2 className={styles.openingHoursTitle}>Openingsuren</h2>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.monday.day}</span> <span className={styles.hours}>{data?.openingHours.monday.openingTime !== "" && data?.openingHours.monday.openingTime !== null && data?.openingHours.monday.closingTime !== "" && data?.openingHours.monday.closingTime !== null ? `${data?.openingHours.monday.openingTime} - ${data?.openingHours.monday.closingTime}` : ""} </span></div>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.tuesday.day}</span> <span className={styles.hours}>{data?.openingHours.tuesday.openingTime !== "" && data?.openingHours.tuesday.openingTime !== null && data?.openingHours.tuesday.closingTime !== "" && data?.openingHours.tuesday.closingTime !== null ? `${data?.openingHours.tuesday.openingTime} - ${data?.openingHours.tuesday.closingTime}` : ""} </span></div>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.wednesday.day}</span> <span className={styles.hours}>{data?.openingHours.wednesday.openingTime !== "" && data?.openingHours.wednesday.openingTime !== null && data?.openingHours.wednesday.closingTime !== "" && data?.openingHours.wednesday.closingTime !== null ? `${data?.openingHours.wednesday.openingTime} - ${data?.openingHours.wednesday.closingTime}` : ""} </span></div>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.thursday.day}</span> <span className={styles.hours}>{data?.openingHours.thursday.openingTime !== "" && data?.openingHours.thursday.openingTime !== null && data?.openingHours.thursday.closingTime !== "" && data?.openingHours.thursday.closingTime !== null ? `${data?.openingHours.thursday.openingTime} - ${data?.openingHours.thursday.closingTime}` : ""} </span></div>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.friday.day}</span> <span className={styles.hours}>{data?.openingHours.friday.openingTime !== "" && data?.openingHours.friday.openingTime !== null && data?.openingHours.friday.closingTime !== "" && data?.openingHours.friday.closingTime !== null ? `${data?.openingHours.friday.openingTime} - ${data?.openingHours.friday.closingTime}` : ""} </span></div>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.saturday.day}</span> <span className={styles.hours}>{data?.openingHours.saturday.openingTime !== "" && data?.openingHours.saturday.openingTime !== null && data?.openingHours.saturday.closingTime !== "" && data?.openingHours.saturday.closingTime !== null ? `${data?.openingHours.saturday.openingTime} - ${data?.openingHours.saturday.closingTime}` : ""} </span></div>
                <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.sunday.day}</span> <span className={styles.hours}>{data?.openingHours.sunday.openingTime !== "" && data?.openingHours.sunday.openingTime !== null && data?.openingHours.sunday.closingTime !== "" && data?.openingHours.sunday.closingTime !== null ? `${data?.openingHours.sunday.openingTime} - ${data?.openingHours.sunday.closingTime}` : ""} </span></div>
              </div>

            </div>

          </div>
        </Layout>
        : <Spinner /> ||  <Error />
      }
    </>
  );
}
