import React from 'react'
import { useState, useEffect } from 'react';
import { games } from '../utils/mockGames.js';
import { ReviewDetails } from './ReviewDetails.jsx';

export function FeaturedReview() {

  const [randomReviews, setRandomReviews] = useState([]);

  useEffect(() => {
    const allReviews = [];
    games.forEach((game) => {
      game.reviews.forEach((review) => {
        allReviews.push({
          ...review,
          gameId: game.id,
          gameTitle: game.name
        });
      });
    });
    const shuffled = allReviews.sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, 4);
    setRandomReviews(selected);
  }, []);

  return (
    <section className="text-voidlight mt-12 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 text-center font-tipographyTitulo">🌟 Featured Reviews 🌟</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 font-tipographyTexto">
        {randomReviews.map((review, index) => (
          <ReviewDetails
            key={index}
            user={review.user}
            comment={`"${review.comment}"`}
            rating={review.rating}
            recommended={review.rating >= 4}
            gameTitle={review.gameTitle}
            gameId={review.gameId}
          />
        ))}
      </div>
    </section>
  )
}