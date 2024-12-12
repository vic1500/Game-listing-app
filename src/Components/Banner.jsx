import React, { useEffect } from 'react'

function Banner({games}) {
    useEffect(() => {
        
    }, [])
  return (
    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-lg'>
            <h2 className='text-[24px] text-white font-bold'>{games.name}</h2>
            <button className='bg-blue-700 px-2 p-1 text-white rounded-lg'>Get Now</button>
        </div>
        <img src={games.background_image} alt={games.name} className='md:h-[320px] w-full object-cover rounded-lg'/>
    </div>
  )
}

export default Banner