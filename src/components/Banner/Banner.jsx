import React from 'react'
import './Banner.scss'
import bannerImg from './../../img/images/promo-img.jpg'


export const Banner = () => {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__wrapper">
          <img src={bannerImg} alt="promo_img" className="banner__img" />
          <div className="banner__info">
            <div className="banner__title">
              <span className='banner__title-highlight highlight'>
                <span>
                  PAYDAY
                </span>
              </span>
              SALE NOW
            </div>
            <div className="banner__text">
              Spend minimal $100 get 30% off
              voucher code for your next purchase
            </div>
            <div className="banner__desc">
              <date className="banner__date">1 June - 10 June 2021</date>
              *Terms & Conditions apply
            </div>
            <button className="banner__btn">Shop Now</button>
          </div>
        </div>
      </div>
    </section>
  )
}
