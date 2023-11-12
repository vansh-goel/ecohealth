import React from 'react'
import "../components/PlantCard.css"
import "../styles.css"

function PlantCard() {
  return (
    <div className='card-box'>
    <div className='card-background'>
      <img style={{
        height: "200px",
        width: "200px",}}>
      </img>
      <h3>Plant Name</h3>
      <p>Plant description</p>
    </div>
    </div>
  )
}

export default PlantCard