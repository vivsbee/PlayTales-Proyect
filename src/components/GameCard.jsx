import { useGames } from '../hooks/useGames';
import { Card } from "antd";
import { Icon } from '@iconify/react';
const { Meta } = Card;
// import { useNavigate } from 'react-router-dom';

export function GameCard() {
    // const navigate = useNavigate();
    const { game } = useGames();
    console.log(game);

    return (
        <section className='m-[100px] flex flex-wrap gap-6 pb-[100px]'>
            {/* className="m-[100px] flex flex-wrap gap-4 pb-[100px]" */}
            {
                game.map((game) => (
                    <Card
                        key={game.id}
                        hoverable
                        style={{ width: 269 }}
                        cover={
                            <img
                                alt={game.name}
                                src={game.image}
                                className='w-[300px] h-[140px] object-container rounded-t-lg'
                            />}
                        className="bg-mistlayerlight text-voidlight border-deepwave transition-transform duration-300 transform hover:scale-105 hover:shadow-xl border-l-deepwave font-tipographyTexto"
                    // className="w-[300px] h-[350px] object-contain"
                    >

                        <Meta title={game.name} description={game.genres} className='font-tipographyTexto ' />
                        <div className='flex flex-wrap gap-2 mt-2'>
                            <p className="text-sm text-gray-800">{game.averageRating}</p>
                            <Icon icon="material-symbols:star" width="17" height="17" className='text-gray-800' />
                        </div>
                    </Card>
                ))
            }
        </section>
    )
}

// .then((response) => {
//     if (response.isConfirmed) {
//         navigate("/gamedetails/:id")
//     }
// })