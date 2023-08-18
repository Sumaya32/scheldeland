import React from 'react';
import { Spinner } from '../shared/Spinner'
import Layout from '../components/layout'
import { useGetContact } from './_query/useGetContact';
import styles from './contact.module.css'

export const Contact = () => {
  const { data, isLoading } = useGetContact();

  if (isLoading) return <Spinner />
  return (
    <Layout>
      <div className={styles.contactContainer}>

        <div className={styles.smallContainer}>

          <div className={styles.adressContainer}>
            <h2>Contacteer ons of kom langs</h2>
            <div className={styles.adressMiniContainer}>
              <div className={styles.address}>
                <img style={{ width: "25px", height: "30px" }} src='./location2.png' />
                <a href="https://www.google.com/maps?t=m&hl=nl&gl=BE&cid=12030728999397251863" target="_blank">
                  <div> {data?.address}</div>
                  <div> {data?.city}</div>
                </a>

              </div>

              <div className={styles.email}>
                <img style={{ width: "25px", height: "30px" }} src='./email.png' />
                <a href="mailto:info@tavernescheldeland.be" >{data?.email}</a>
              </div>

              <div className={styles.phone}>
                <img style={{ width: "25px", height: "30px" }} src='./mobile.png' />
                <a href="tel:+476989330" >Reserveren via<br />{data?.phoneNumber}</a>
              </div>

     

            </div>

          </div>

          <div className={styles.openingHours}>
            <h2>Openingsuren</h2>
            <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.wednesday.day}</span> <span className={styles.hours}>{data?.openingHours.wednesday.openingTime} - {data?.openingHours.wednesday.closingTime}</span></div>
            <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.thursday.day}</span> <span className={styles.hours}>{data?.openingHours.thursday.openingTime} - {data?.openingHours.thursday.closingTime}</span></div>
            <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.friday.day}</span> <span className={styles.hours}>{data?.openingHours.friday.openingTime} - {data?.openingHours.friday.closingTime}</span></div>
            <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.saturday.day}</span> <span className={styles.hours}>{data?.openingHours.saturday.openingTime} - {data?.openingHours.saturday.closingTime}</span></div>
            <div className={styles.daysAndHours}><span className={styles.days}>{data?.openingHours.sunday.day}</span> <span className={styles.hours}>{data?.openingHours.sunday.openingTime} - {data?.openingHours.sunday.closingTime}</span></div>

          </div>
        </div>




        <div className={styles.iframeContainer} >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8498601498263!2d4.285960943380119!3d51.12574092945093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f2ed903fa9b9%3A0xa6f5bc488e105b17!2sScheldeland!5e0!3m2!1snl!2sbe!4v1670838055770!5m2!1snl!2sbe"
            style={{ width: "100%", height: "100%", border: "", margin: 0 }}
            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" frameborder="0"
            onScroll="no" marginheight="0" marginwidth="0"></iframe>



          {/* <iframe src="https://www.google.com/maps/d/embed?mid=15fQkaIqejvktSaOYpPt5DQlxCBOTsM0&ehbc=2E312F"
    width="100%"
    height="100%"
    frameborder="0"
    style={{ border: "0", margin: "0", zIndex: "1" }}
    allowfullscreen=""
 ></iframe> */}

          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d10016.299914886707!2d4.2876127!3d51.125525!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x47c3f2ed903fa9b9%3A0xa6f5bc488e105b17!2sScheldeland%20Gelaagstraat%2033%209150%20Kruibeke!3m2!1d51.1255246!2d4.2877852!5e0!3m2!1snl!2sbe!4v1692296771944!5m2!1snl!2sbe" width="100%" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        </div>


      </div>
    </Layout>
  );
}
