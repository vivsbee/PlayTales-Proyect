import React from 'react'
import { Link } from 'react-router-dom';

export function ReviewDetails({ user, comment, rating, recommended, gameTitle, gameId }) {
    return (
        <div className="bg-[#1b1f32]/80 text-voidlight p-6 rounded-xl shadow-lg w-full max-w-xl mb-4">
            <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-slate-600 rounded-full flex items-center justify-center text-white font-bold">
                    {user[0].toUpperCase()}
                </div>
                <div className="text-lg font-semibold">{user}</div>
                <span className={`ml-auto px-2 py-1 text-sm rounded ${recommended ? "bg-green-600/80" : "bg-red-600/80"
                    }`}>
                    {recommended ? "Recommended" : "Not Recommended"}
                </span>
            </div>
            {gameTitle && <p className="text-sm italic text-ice mb-1">Game: {gameTitle}</p>}
            <blockquote className="italic text-slate-300 mb-2">"{comment}"</blockquote>
            <div className="text-sm text-ice">Rating: {rating}/5 ⭐</div>
            {gameId && (
                <Link to={`/gamedetails/${gameId}`}>
                    <button className="mt-2 text-sm bg-bottondark text-voidlight px-4 py-1 rounded-md hover:bg-bottonlight/80 transition duration-300">
                        ➤ Ver juego
                    </button>
                </Link>
            )}
        </div>
    );
}
