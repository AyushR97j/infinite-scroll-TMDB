import { useDispatch, useSelector } from "react-redux"
import MovieCard from "./MovieCard"
// import useMovies from "../hooks/useMovies"
import { useEffect, useState } from "react"
import { nextPage } from "../utils/pageSlice"

const MovieList = () => {

  const page = useSelector( (store) => store.page.page)
  const data = useSelector( (store) => store.movies.movies)
  const dispatch = useDispatch();

  const [movies, setMovies] = useState(null);

  // const loadMoreMovies = async() => {
  //   dispatch(nextPage());
  // }

  useEffect( () => {
    setMovies(data);

    const handleOnScroll = async() => {
      if(
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight-100
      ) {

        console.log("hey");
        dispatch(nextPage());
      }
    };

    window.addEventListener('scroll', handleOnScroll);

    return () => {
      window.removeEventListener('scroll', handleOnScroll);
    };
  },[movies, page, dispatch])

  // if(movies == null) return <div>No Data</div>

  return (
    <div className='bg-slate-900 flex flex-col justify-center items-center mt-0'>
    <div className="text-white py-4 mt-4 font-bold text-3xl opacity-90">Top Rated IMDB Movies :</div>
      {movies &&
        movies?.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))
      }
    </div>
  )
}

export default MovieList
