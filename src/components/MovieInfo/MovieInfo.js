import React from 'react';
import './MovieInfo.css';

const MovieInfo = (props) => {
    let image = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${props.currentMovie.poster_path}` ;
    return (
       
        <div className="movieInfo">
            <div onClick={props.closeMovieInfo} className="movieInfo__backButton">
                <i className="fa fa-arrow-left"></i>
                <span style={{marginLeft: 10}}> Go Back</span>
            </div>
            <div className="movieInfo__details">
                    <div className="movieInfo__imageInfo">
                        <img src={image} />
                    </div>
                    <div className="movieInfo__info">
                        <p><span className="content">Releas Date:</span> {props.currentMovie.release_date.substring(5).split("-").concat(props.currentMovie.release_date.substring(0, 4)).join("/")}</p>
                        <p><span className="content">Movie Name:</span> {props.currentMovie.title}</p>
                        <p><span className="content">overview:</span>{props.currentMovie.overview}</p>
                        <p><span className="content">User Score:</span> {props.currentMovie.vote_average}</p>
                       
                    
                    </div>
            </div>
        </div>
    )
}

export default MovieInfo