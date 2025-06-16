import React from 'react'

export function GameReviews({ reviews }) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2 font-tipographyTextoTwo">User Reviews</h2>
      <ul className="space-y-4 font-tipographyTexto">
        {reviews.map((r, i) => (
          <li key={i} className="border-l-4 border-ice pl-4">
            <p className="font-semibold">{r.user} - ⭐ {r.rating}</p>
            <p className="text-sm">{r.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
