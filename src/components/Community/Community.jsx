import React from 'react'

import './Community.scss'

export const Community = () => {
  return (
    <section className="community">
      <div className="container">
        <div className="community__wrapper">
          <h2 className="community__title">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</h2>
          <div className="community__text">
            Type your email down below and be young wild generation
          </div>
          <form className="community__form">
            <input type="text" className="community__input" placeholder='Add your email here' />
            <button className="community__btn">Send</button>
          </form>
        </div>
      </div>
    </section>
  )
}
