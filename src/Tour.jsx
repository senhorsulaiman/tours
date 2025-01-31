import React, { useState } from 'react'

const Tour = ({id,name,info,image,removeTour}) => {

    const [readMore,setReadMore]=useState(false)
  return (
    <div className='single-tour '>

        <img src={image} alt={name} className='img' />
        <div className="tour-info">

            <h5>{name}</h5>
            <p>{readMore?info:`${info.substring(0, 200)}...`}   <button className=' info-btn' onClick={()=>setReadMore(!readMore)}>{readMore?'show less':'read more'}</button></p>
        

            <button className='btn-block delete-btn' onClick={()=>removeTour(id)}>delete</button>
        </div>


    </div>
  )
}

export default Tour
