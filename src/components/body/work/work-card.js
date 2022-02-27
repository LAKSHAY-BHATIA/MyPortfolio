import React from 'react'
import { isElementOfType } from 'react-dom/test-utils'
import "./work-card.css"
function WorkCard({item}) {
  return (
    <div className="work-card">
        <img src={item.companyLogo} className="work-logo"/>
        <div className='work-info'>
           <label className='company-name'><b>{item.company}</b></label>
           <div className='work-dates'>
               
           <label className='company-designation'><b>{item.designation}</b></label>
           
               <br/>
               <label>{item.dateJoining}</label> - <label>{item.dateEnd}</label>
           </div>
           <div className='work-desc'>
               <p>{item.work}</p>
           </div>
        </div>
    </div>
  )
}

export default WorkCard