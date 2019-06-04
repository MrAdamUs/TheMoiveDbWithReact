import React from 'react';
import './MoviesList.css';
import MovieCard from '../MovieCard/MovieCard';


const MoviesList = ({ movies, viewMovieInfo }) => {
      const renderlist =  movies.map(movie => {
            return <MovieCard movie={movie} viewMovieInfo={viewMovieInfo} movieId={movie.id} />;
        });

        return   <div className="moviesList">{renderlist}</div>
            
          
        

}

export default MoviesList;