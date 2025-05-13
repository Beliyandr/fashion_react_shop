import React from 'react'

import './Vouchers.scss'
import vehImage from './../../img/images/vouchers-img.png'
import googleImg from './../../img/icons/google-play.png'
import appleImg from './../../img/icons/app-store.png'

export const Vouchers = () => {
  return (
    <section className="vouchers">
      <div className="container">
        <div className="vouchers__wrapper">
          <div className="vouchers__info">
            <h2 className="vouchers__title">
              DOWNLOAD APP &
              GET THE VOUCHER!
            </h2>
            <div className="vouchers__text">
              Get 30% off for first transaction using
              Rondovision mobile app for now.s
            </div>
            <div className="vouchers__stores">
              <a href="#!" className="vouchers__stores-link">
                <img src={googleImg} alt="" className="vouchers__store" />
              </a>
              <a href="#!" className="vouchers__stores-link">
                <img src={appleImg} alt="" className="vouchers__store" />
              </a>
            </div>
          </div>
          <img src={vehImage} alt="vehImage" className="vouchers__img" />
        </div>
      </div>
    </section>
  )
}
