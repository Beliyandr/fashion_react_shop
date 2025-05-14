import React from 'react'
import { Promo } from '../components/Promo'
import { Brands } from '../components/Brands'
import { Arrivals } from '../components/Arrivals'
import { Banner } from '../components/Banner'
import { Favorite } from '../components/Favorite'
import { Vouchers } from '../components/Vouchers'
import { Community } from '../components/Community'

export const MainPage = () => {
  return (
    <>
      <Promo />
      <Brands />
      <Arrivals />
      <Banner />
      <Favorite />
      <Vouchers />
      <Community />

    </>
  )
}
