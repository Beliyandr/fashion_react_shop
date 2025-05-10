import React from 'react'
import hm from './../../img/brands/HM.png'
import amazon from './../../img/brands/Amazon.png'
import lacoste from './../../img/brands/Lacoste.png'
import levis from './../../img/brands/Levis.png'
import obey from './../../img/brands/Obey.png'
import shopify from './../../img/brands/Shopify.png'




export const Brands = () => {
  return (
    <section className="brands">
      <div className="container">
        <ul className="brands__list">
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={hm} alt="hm" className="brands__img" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={amazon} alt="amazon" className="brands__img" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={lacoste} alt="lacoste" className="brands__img" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={levis} alt="levis" className="brands__img" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={obey} alt="obey" className="brands__img" />
            </a>
          </li>
          <li className="brands__item">
            <a href="#!" className="brands__link">
              <img src={shopify} alt="shopify" className="brands__img" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
