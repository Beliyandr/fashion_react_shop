import React from 'react'
import './Card.scss'
import cardArrow from './../../img/icons/arrow.svg'

export const Card = ({ linkImg, title, desc }) => {


  return (
    <div className="card">
      <a href="#!" className="card__link"></a>
      <img className='card__image' src={linkImg} alt="image" />
      <div className="card__body">
        <div className="card__text">
          <div className="card__title">{title}</div>
          <div className="card__desc">{desc}</div>
        </div>
        <div className="card__icon">
          <img src={cardArrow} alt="arrow" />
        </div>
      </div>
    </div>
  )
}
