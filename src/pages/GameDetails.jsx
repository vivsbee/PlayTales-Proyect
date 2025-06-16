import React from 'react';
import { useParams } from 'react-router-dom';
import { games } from '../utils/mockGames.js';
import { GameHeader } from '../components/GameHeader.jsx';
import { GameInfo } from '../components/GameInfo.jsx';
import { GameStats } from '../components/GameStats.jsx';
import { GameReviews } from '../components/GameReviews.jsx';
import { Link } from 'react-router-dom';


export function GameDetails() {

  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));
  if (!game) return <p className="text-center text-white">Game not found</p>;

  // const {games} = useGames();
  return (
    <div className="text-voidlight p-6 flex flex-col gap-8 max-w-6xl mx-auto">
      <GameHeader game={game} />
      <GameInfo game={game} />
      <GameStats game={game} />
      <div className="mt-6 text-center">
        <Link to="/catalogue">
          <button className="bg-bottondark text-voidlight px-6 py-2 rounded-lg font-semibold font-tipographyTexto transition duration-300 hover:bg-bottonlight/80">
            ⬅ Back to Catalogue
          </button>
        </Link>
      </div>
      <GameReviews reviews={game.reviews} />
    </div>
  )
}