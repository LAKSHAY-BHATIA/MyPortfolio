import React from 'react'
import "./about.css"
import SocialMediaContact from '../../common/socialmedia-contact/socialmedia-contact'
function About() {
  return (
    <div className="about">
        <div className='about-top'>
            <div className='about-info'>
             Hello There 👋, I am
             <br/> <span className='info-name'>Lakshay Bhatia</span>.
             <br/> I love experimenting with the web.
            </div>

             <div className='about-photo'>
              <img src={require('../../../assets/coding.png')} className="picture"/>
             </div>
             
        </div>
        
        <SocialMediaContact/>
    </div>
  )
}

export default About