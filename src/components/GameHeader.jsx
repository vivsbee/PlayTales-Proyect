import React from 'react'

export function GameHeader({ game }) {
  return (
    <div className="flex gap-6 items-center ">
      <img src={game.image} alt={game.name} className="w-[300px] h-[140px] object-container rounded-lg shadow-lg" />
      <div>
        <h1 className="text-4xl font-bold font-tipographyTitulo">{game.name}</h1>
        <p className="text-sm mt-2 font-tipographyTextoTwo">{game.releaseDate} • {game.developer}</p>
      </div>
    </div>
  );
}



