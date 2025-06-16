import React from 'react'
import { ReviewDetails } from './ReviewDetails.jsx';

export function GameReviews({ reviews }) {
    return (
        <div className="mt-4 font-tipographyTexto">
            <h2 className="text-2xl font-bold mb-4 font-tipographyTextoTwo">Reviews</h2>
            {reviews.map((review, index) => (
                <ReviewDetails
                    key={index}
                    user={review.user}
                    comment={review.comment}
                    rating={review.rating}
                    recommended={review.rating >= 4}
                />
            ))}
        </div>
    );
}