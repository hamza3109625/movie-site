import React from 'react';
import "../css/MovieCard.css";
import { useMovieContext } from '../contexts/MovieContext';

function MovieCard({movie}) {

    const { addToFavourites, removeFromFavourites, isFavourite } = useMovieContext();

    function favouriteClick(){
        alert("Added to favourites")
    }

    return(
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <div className="movie-image">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                </div>
                <div className="movie-overlay">
                    <button className="favourite-button" onClick={favouriteClick}>
                        ❤
                    </button>
                </div>
            </div>
    
            <div className="movie-info">
                <h1>{movie.title}</h1>
                <p>{movie.release_date?.split("-")[0]}</p>

            </div>
        </div>
        </>

    )
  

}

export default MovieCard;