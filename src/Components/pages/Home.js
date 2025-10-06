import React from 'react'
import Navbar from '../Navbar'
import SlideShow from '../SlideShow';
import Category from '../Category';
import Offers from '../Offers';
import Acs from '../accessories';
import Arts from '../articles';


export default function Home() {
  return (
    <div>
      <SlideShow></SlideShow>
      <Category></Category>
      <Offers></Offers>
      <Acs></Acs>
      <Arts></Arts>
    </div>
  )
}
