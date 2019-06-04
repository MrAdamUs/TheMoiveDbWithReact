import React from 'react';
import './MovieCard.css';


class MovieCard extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.state = {
          isHovering: false,
        };
      }
    
      handleMouseHover() {
        this.setState(this.toggleHoverState);
      }
    
      toggleHoverState(state) {
        return {
          isHovering: !state.isHovering,
        };
      }
    
    render() {
       
        const { movie , viewMovieInfo, movieId} = this.props
        let background = `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`
        return (
            <div className="movieCard" key={movie.id} style={{backgroundImage: `url(${background})`}} onClick={() => viewMovieInfo(movieId)} >
             <div className="movieCard__darkLayer">
                <h4>{movie.title}</h4>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
             </div>  
            </div>
        )
    }
} 

export  default MovieCard;


{/* <div className="movieCard" key={movie.id}>
<div className="movieCard__title"><h4>{movie.title}</h4></div>
<div className="movieCard__body">
    <div className="movieCard__image">
        <img src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`} alt={movie.title} />
    </div>
    <div className="movieCard__des">
        <h4>Overview</h4>
        <p>{movie.overview}</p>
        <p className="movieCard__readMore"><a href="#">Read More...</a></p>
    </div>
</div>
</div> */}