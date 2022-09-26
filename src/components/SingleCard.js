import React from 'react'
import "./SingleCard.css"

export const SingleCard = (props) => {
  const handleEvent = () => {
    props.handleChoice(props.card)
  }
  return (
    <div className='card'>
      <div>
        <img className='front' src={props.card.src} alt="card front" />
        <img className='back' src="/img/cover.png" onClick={handleEvent} alt="card back" />
      </div>
    </div>
  )
}
