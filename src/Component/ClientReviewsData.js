import React from 'react'
import "./ClientReviews.css"

function ClientReviewsData(props) {
  return (
    <div className='t-card'>
        <div className='t-image'>
            <img src={props.image} alt='review' />
        </div>
        <h4>{props.heading}</h4>
        <p>{props.text}</p>
    </div>
  )
}

export default ClientReviewsData