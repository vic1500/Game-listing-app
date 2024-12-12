import React, { useEffect, useState } from 'react'
import GenreList from '../Components/GenreList'
import GlobalApi from '../Services/GlobalApi'
import Banner from '../Components/Banner'
import TrendingGames from '../Components/TrendingGames'
import GamesByGenreId from '../Components/GamesByGenreId'

function Home() {
    const [allGamesList, setAllGamesList] = useState([])
    const [gameListByGenre, setGameListByGenre] = useState([])
    const [selectedGenresName, setSelectedGenresName] = useState('Action')

    useEffect(() => {
        getAllGamesList()
        getGameListByGenreId(4);
    }, [])

    const getAllGamesList = () => {
        GlobalApi.getAllGames.then((resp) => {
            setAllGamesList(resp.data.results);
        })
    }

    const getGameListByGenreId = (id) => {
        GlobalApi.getGameListByGenreId(id).then((resp) =>{
        console.log(resp.data.results)
        setGameListByGenre(resp.data.results)
    })
    }

  return (
    <div className='grid grid-cols-4 lg:px-[50px] gap-3'>
        <div className='hidden md:block px-5 ml-4'>
            <GenreList genreId={(genreId) => getGameListByGenreId(genreId)} selectedGenresName={(name) => setSelectedGenresName(name)}/>
        </div>
        <div className='col-span-4 md:col-span-3 p-2'>{ allGamesList.length>0 && gameListByGenre.length>0 ? 
            <div>
            <Banner games={allGamesList[0]}/>, <TrendingGames games={allGamesList} /> 
            <GamesByGenreId gamesByGenre={gameListByGenre} selectedGenresName={selectedGenresName}/>
            </div> 
            : null }</div>
    </div>
  )
}

export default Home