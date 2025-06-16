import React from 'react'

export function GameStats({ game }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 font-tipographyTextoTwo">Details</h2>
      <ul className="grid grid-cols-2 gap-2">
        <li className="font-tipographyTexto"><strong>Rating:</strong> ⭐ {game.averageRating}</li>
        <li className="font-tipographyTexto"><strong>Duration:</strong> {game.estimatedDuration}</li>
        <li className="font-tipographyTexto"><strong>Languages:</strong> {game.availableLanguages.join(', ')}</li>
        <li className="font-tipographyTexto"><strong>Tags:</strong> {game.tags.join(', ')}</li>
      </ul>
    </div>
  );
}

