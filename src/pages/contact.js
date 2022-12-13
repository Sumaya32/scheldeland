import * as React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/layout'
import { 
  contactContainer,
  mail, 
  phone,
  adressContainer,
  address,
  city
} from "./contact.module.css"

const ContactPage = ({ data: { wpPage: { contactfield: item } } }) => {
  return (
    <Layout>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8498601498263!2d4.285960943380119!3d51.12574092945093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3f2ed903fa9b9%3A0xa6f5bc488e105b17!2sScheldeland!5e0!3m2!1snl!2sbe!4v1670838055770!5m2!1snl!2sbe" style={{ width: "100%", height: "50vh", style: "border:0;", marginTop: "-4%" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className={contactContainer}>
        <h2>{item.title}</h2>
        <address className={adressContainer}>

          <div className={address}>{item.address}</div>
          <div className={city}>{item.city}</div>
          <div  className={phone}> <a href="tel:+4733378901">{item.phoneNumber}</a></div>
          <div className={mail}><a href="mailto:webmaster@example.com">{item.email}</a></div>
        </address>
      </div>
    </Layout>
  )
}





export const query = graphql`
  query{
    wpPage(slug: {eq: "contact-us"}) {
      contactfield {
        title
        address
        city
        email
        phoneNumber
      }
    }
    
}
`


export default ContactPage