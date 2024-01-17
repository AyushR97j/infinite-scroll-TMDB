import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { nextPage } from "../utils/pageSlice";
import { addMovies } from "../utils/movieSlice";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${API_KEY}`
    }
  };

const useMovies = () => {
    const page = useSelector((store) => store.page.page);
    console.log(`API called for page:", ${page}`)
 
    const dispatch = useDispatch();

    const getMovies = async() => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options);
      const json = await data.json();
      console.log("movies list", json.results);
      dispatch(addMovies(json.results));
      //dispatch(nextPage())

    } catch (error) {
      console.error(error);
    }
    }

    useEffect( () => {
        getMovies();
    }, [page]);
}
  
export default useMovies;