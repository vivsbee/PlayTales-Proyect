import React from 'react'
import { Carousel } from 'antd';
import { games } from '../utils/mockGames';


export function GameCarousel() {
    return (
        <div className="w-full max-w-6xl mx-auto mt-5 mb-5 object-container rounded-xl overflow-hidden shadow-neonSmall hover:shadow-neonBig transition duration-300 ease-in-out">


            <Carousel
                autoplay
                className="object-cover rounded-xl overflow-hidden w-full h-[500px]"
                autoplaySpeed={5000}
                dots={true}
                effect="fade"
            >
                {games.slice(0, 6).map(game => (
                    <div key={game.id} className="w-full h-[500px] overflow-hidden">
                        <img
                            src={game.image}
                            alt={game.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </Carousel>

        </div> 
    )
}



