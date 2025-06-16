import React, { useEffect } from 'react'
import { GameCarousel } from '../components/GameCarousel.jsx';
import FeaturedGames from '../components/FeaturedGames.jsx';
import { FeaturedReview } from '../components/FeaturedReview.jsx';


export function Home() {

  return (
    <div className="">
      <h1 className='font-tipographyTitulo text-center text-6xl font-semibold text-voidlight my-6'>PLAYTALES</h1>
      <GameCarousel />
      <div className='relative flex items-center bg-twilightcore w-screen left-0 h-96 mt-12'>
        <FeaturedGames />
      </div>
      <FeaturedReview />
    </div>
  );
}
