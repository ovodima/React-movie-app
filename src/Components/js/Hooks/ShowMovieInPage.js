import React from 'react'
import './Movies.css';

const voteRate = (vote) => {
    if (vote >= 8) {
      return "green";
    } else if (vote >= 5) {
      return "orange";
    } else {
      return "red";
    }
  }

export default function ShowMovieInPage(props) {

    let imgPath = "https://image.tmdb.org/t/p/w1280"
    
    const { data } = props
    const {
        poster_path,
        original_title,
        vote_average,
        overview,
        id,
        title,
      } = data;

      

  return (
    <div kye={id} className = "movie">
            <img src={imgPath + poster_path} alt={imgPath + poster_path}/>
                  
            <div className="movie-info">
            <h3>{original_title}</h3>
            <span className={voteRate(
                vote_average
                )}> {vote_average} </span>
            </div>
            <div className="overview">
                <h3>{title}</h3>
                    {overview}
            </div>
    </div>
  )
}
