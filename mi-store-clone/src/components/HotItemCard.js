import React from 'react'
import './HotItemCard.css'
const HotItemCard = ({image,index,name,price}) => {
  return (
      <div className="HotItemCard">
          <img src={image} alt={"l"} />
          <p>{name}</p>
          <span>{price}</span>

      </div>
  )
}

export default HotItemCard
