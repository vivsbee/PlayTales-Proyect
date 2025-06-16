import React from 'react'
import { useEffect, useState } from 'react';
import { games } from '../utils/mockGames.js';
import { Card } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

export default function FeaturedGames() {

    const [popularGames, setPopularGames] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const shuffled = [...games].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 4);
        setPopularGames(selected);
    }, []);

    return (
         <section className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-voidlight font-tipographyTitulo">🔥 Popular Games</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {popularGames.map((game) => (
                    <Card
                        key={game.id}
                        hoverable
                        onClick={() => navigate(`/gamedetails/${game.id}`)}
                        cover={
                            <img
                                alt={game.name}
                                src={game.image} 
                                className="h-[125px] object-cover w-[300px] rounded-md transition duration-300 hover:scale-105"
                            />
                        }
                        className="bg-deepwave text-voidlight border-none shadow-lg hover:shadow-2xl transition-all duration-300"
                    >
                        <Meta
                            title={<span className="text-voidlight font-semibold font-tipographyTexto">{game.name}</span>}
                            description={
                                <p className="text-sm text-voidlight opacity-75 font-tipographyTexto">
                                    {game.description.length > 60
                                        ? game.description.slice(0, 60) + '...'
                                        : game.description}
                                </p>
                            }
                        />
                    </Card>
                ))}
            </div>
        </section>
    )
}