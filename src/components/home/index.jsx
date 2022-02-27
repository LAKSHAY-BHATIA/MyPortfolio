import React from 'react'
import "./home.css"
import Header from "../header"
import Footer from "../footer"
import Body from "../body"
function Home () {
  return (
    <div className="home"> 
    <Header/>
   
    <div>
      <Body/>
      </div>
      <div>
      <Footer/>
      </div> 
    </div>
  )
}

export default Home 