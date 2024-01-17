import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MovieList from './MovieList'
import MoviePage from './MoviePage';
import useMovies from '../hooks/useMovies';

const Body = () => {

  useMovies();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <MovieList />
        },
        {
          path: "/movies/:movie",
          element: <MoviePage />
        }
    ]);
    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
