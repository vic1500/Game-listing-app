import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegCommentDots } from "react-icons/fa";


function GamesByGenreId({ gamesByGenre, selectedGenresName }) {
 
    return (
    <div>
        <h2 className='font-bold text-[30px] dark:text-white mt-7 ml-3 md:ml-0'>{selectedGenresName.includes("Games") ? selectedGenresName : `${selectedGenresName} Games`}</h2>
        <div className='md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
        { gamesByGenre.map((item) => (
            <div key={item.id} className='bg-gray-300 dark:bg-gray-700 rounded-xl p-3 my-4 dark:text-white min-h-[40vh] 2xl:text-[28px]          cursor-pointer hover:scale-105 hover:transition-all ease-in-out duration-300 '>

                <img src={item.background_image} alt={item.name} className='w-full h-[30vh] object-cover rounded-xl'/>

                <h2 className='mt-2 font-bold text-[20px]'>{item.name}<span className='ml-2 bg-green-100 p-1 text-[10px] 2xl:text-[15px] text-green-700 rounded-sm font-medium '>{item.metacritic}</span></h2>

                <h2 className='mt-2 flex items-center'>
                    <FaStar className='text-[#FFD700] inline mr-1'/> {item.rating} <FaRegCommentDots className='inline mr-1 ml-3'/> {item.reviews_count}  🔥{item.suggestions_count}
                </h2>

            </div>
        ))}
    </div>
    </div>
  )
}

export default GamesByGenreId