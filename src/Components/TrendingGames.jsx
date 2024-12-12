import React, { useEffect } from 'react'

function TrendingGames({games}) {
    useEffect(() => {

    })
  return (
    <div className='mt-3 hidden md:block'>
        <h2 className='font-bold text-[30px] dark:text-white'>Trending Games</h2>
        <div className='hidden md:grid md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5'>
        {games.map((item, index) => (
            index < 4 && (
                <div key={item.id} className='cursor-pointer hover:scale-110 transition-all duration-300 ease-in-out'>
                    <img src={item.background_image} alt={item.name} className='object-cover  rounded-t-lg h-[40vh]'/>
                    <h2 className='bg-slate-300 dark:bg-gray-700 dark:text-white text-[20px] font-bold p-2 rounded-b-lg py-3 min-h-[88px]'>{item.name}</h2>
                </div>
            )
        ))}
    </div>
    </div>
  )
}

export default TrendingGames