import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'


function GenreList({genreId, selectedGenresName}) {
    const [genreList, setGenreList] =useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    useEffect(() => {
        getGenreList();
    }, [])

    const getGenreList = () => {
        GlobalApi.getGenreList.then((resp) => {
            setGenreList(resp.data.results);
        })
    }

  return (
    <div>
        <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
        {genreList.map((item, index) => (
            <div 
            onClick={() => {
                setActiveIndex(index);  
                genreId(item.id);
                selectedGenresName(item.name)
            }}
            key={item.id} 
            className={`flex gap-3 my-2 items-center cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-700 p-2 rounded-lg hover:font-bold hover:scale-[1.05] transition-all ease-in-out duration-200 ${activeIndex == index ? 'bg-gray-300 dark:bg-gray-700 font-bold scale-[1.05]' : null}`}>
                <img src={item.image_background} alt={item.name} className='w-[40px] h-[40px] rounded-lg object-cover'/>
                <h3 className='dark:text-white text-[16px]'>{item.name}</h3>
            </div>
        ))}
    </div>
  )
}

export default GenreList