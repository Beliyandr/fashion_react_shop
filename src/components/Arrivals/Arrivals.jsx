import React from 'react'
import './Arrivals.scss'
import { Card } from '../Card/Card'
import cardImg1 from './../../img/categories/cat-01.jpg'
import cardImg2 from './../../img/categories/cat-02.jpg'
import cardImg3 from './../../img/categories/cat-03.jpg'

export const Arrivals = () => {
  return (
    <section className="arrivals">
      <div className="container">
        <div className="arrivals__header">
          <h2 className="arrivals__title title-2">
            NEW ARRIVALS
          </h2>
        </div>
        <div className="arrivals__cards">
          <Card title='Hoodies & Sweetshirt' desc='Explore Now!' linkImg={cardImg1} />
          <Card title='Coats & Parkas' desc='Explore Now!' linkImg={cardImg2} />
          <Card title='Tees & T-Shirt' desc='Explore Now!' linkImg={cardImg3} />

        </div>
      </div>
    </section>
  )
}
