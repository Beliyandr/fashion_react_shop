import React from 'react'
import './Favorite.scss'
import { Card } from '../Card/Card'
import cardImg1 from './../../img/images/promo-01.jpg'
import cardImg2 from './../../img/images/promo-02.jpg'



export const Favorite = () => {
  return (
    <section className="favorite">
      <div className="container">
        <h2 className="favorite__title title-2">
          Young’s Favourite
        </h2>
        <div className="favorite__cards">
          <Card title='Trending on instagram' desc='Explore Now!' linkImg={cardImg1} />
          <Card title='All Under $40' desc='Explore Now!' linkImg={cardImg2} />

        </div>
      </div>
    </section>
  )
}
