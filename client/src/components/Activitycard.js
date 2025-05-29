import React from 'react'
import "./activitycard.css"

import { Link } from 'react-router-dom'
function Activitycard({el}) {
  return (
    <div className='mycard'>
      <img src={el?.image} />
      <div className='contentt'>
        <h3>{el?.nameactivite} </h3>
        <h5>{el?.category}</h5>
        <ul>
          <li>Price: {el?.prix} TND</li>
          <li>Start Date: {el?.dateactivite}</li>
          <li>Coach: Chamessedin Habil</li>
        </ul>
         <div>
         <Link to={`/detail/${el?._id}`}> <span>Participate</span></Link>  
         </div>
      
      </div>
    </div>
  )
}

export default Activitycard
