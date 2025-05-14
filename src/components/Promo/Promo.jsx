import React from "react";
import './Promo.scss'
import promoImg from './../../img/images/header-img.jpg'
import { Link } from 'react-router-dom';


export const Promo = () => {
  return <section className='promo'>
    <div className="container">
      <div className="promo__content">
        <div className="promo__text">
          <div className="promo__title">
            <span className='promo__title-highlight highlight'>
              <span>
                LET’S
              </span>
            </span>
            EXPLORE
            <span className='promo__title-highlight highlight highlight--yellow'>
              <span>
                UNIQUE
              </span>
            </span>
            CLOTHES.
          </div>
          <div className="promo__desc">
            Live for Influential and Innovative fashion!
          </div>
          <div className="promo__btn-wrapper">
            <Link to="/catalogue" className="promo__btn">Shop Now</Link>
          </div>
        </div>
        <div className="promo__img">
          <img src={promoImg} alt="promo" />
        </div>
      </div>
    </div>
  </section>;
};
