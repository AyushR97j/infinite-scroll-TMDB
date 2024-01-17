let genreList = {
  28: 'Action',
  12: 'Adventure',
  16: 'Animation',
  35: 'Comedy',
  80: 'Crime',
  99: 'Documentary',
  18: 'Drama',
  10751: 'Family',
  14: 'Fantasy',
  36: 'History',
  27: 'Horror',
  10402: 'Music',
  9648: 'Mystery',
  10749: 'Romance',
  878: 'Science Fiction',
  10770: 'TV Movie',
  53: 'Thriller',
  10752: 'War',
  37: 'Western'
}

const MovieCard = ({movie}) => {

    //const{title, overview, poster_path} = movie;
    //console.log("h",movie?.overview)
  
    //console.log(movie)
    return (
      <div className="w-9/12 h-80 flex mx-10 bg-gray-700 py-6 px-6 my-5 rounded-3xl gap-6">
        <img className="rounded-2xl w-40 mx-2 my-4" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
        
        <div className="flex flex-col">
        <div>
          <p className="font-bold text-3xl text-left py-4 text-white opacity-85">{movie.title}</p>
          <div className="flex gap-3">
            {movie.genre_ids &&
              movie.genre_ids.map((genre, index) =>(
                <div className="bg-slate-300 rounded-full px-2" key={index}>
                  {genreList[genre]}
                </div>
              ))
            }
          </div>
          <div className="text-white opacity-65 mt-2 ">Release Date - {movie.release_date}</div>
          <div className="text-white mt-1">Rating - <span className="bg-slate-600 px-3 rounded-full py-1">{movie.vote_average}</span></div>
        </div>
          
          <p className="font-medium text-md text-left py-1 text-white opacity-65">{movie.overview}</p>
        </div>
      </div>
    )
  }
  
  export default MovieCard
  