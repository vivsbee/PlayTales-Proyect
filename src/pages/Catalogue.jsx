import React from 'react'
import { useGames } from '../hooks/useGames.jsx'
import { Card } from 'antd';
const { Meta } = Card;

export function Catalogue() {

  const { game } = useGames();

  console.log(game)

  return (
    <>
      <section className="m-[100px] flex flex-wrap gap-4 pb-[100px]">
        {
          games.map((game) => (
            <Card
              key={game.id}
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={game.image} className="w-[300px] h-[350px] object-contain" />}
            >
              <Meta title={game.title} description={game.description} />
            </Card>
          ))
        }
      </section>
    </>
  )
}