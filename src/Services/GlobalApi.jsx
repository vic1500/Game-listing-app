import axios from "axios";

const key = "75258758f17e4060b81634701b98bd4d";

const axiosCreate = axios.create({
    baseURL: 'https://api.rawg.io/api'
})


 const getGenreList = axiosCreate.get(`/genres?key=${key}`);
 const getAllGames = axiosCreate.get(`/games?key=${key}`);
 const getGameListByGenreId = (id) => axiosCreate.get(`/games?key=${key}&genres=${id}`)

export default {
    getGenreList,
    getAllGames,
    getGameListByGenreId
}



