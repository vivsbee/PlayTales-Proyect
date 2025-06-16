import React from 'react'

export function GameInfo({ game }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 font-tipographyTextoTwo">About</h2>
      <p className="mb-4 font-tipographyTexto">{game.description}</p>
      <p className="font-tipographyTexto"><strong>Genres:</strong> {game.genres.join(', ')}</p>
      <p className="font-tipographyTexto"><strong>Platforms:</strong> {game.platforms.join(', ')}</p>
    </div>
  );
}