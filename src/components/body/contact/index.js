import React from 'react'
import "./contact.css"
import Seperator from '../../common/seperator';
import SocialMediaContact from '../../common/socialmedia-contact/socialmedia-contact';
function Contact() {
  return (
    <div className='contact'>
      <Seperator/>
      <label className='section-title'>Contact</label>
      <div className='contact-container'>

      <div className='contact-left'>
        <p> Want to get in touch? Contact me on any of the platform.</p>
        <SocialMediaContact/>
      </div>
      <div className='download'>
   {/* <a download href={require("../../../assets/icons/facebook.png").default}> */}
   <a href={require("../../../assets/resume/LakshayBhatiaResume2022.pdf")} download>
   Download Resume &nbsp;    
    <i class="fi-rr-cloud-download download-icon"/>
     
   </a>
   </div>
      </div>
    </div>
  )
}

export default Contact;