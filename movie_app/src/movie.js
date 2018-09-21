import React, { Component } from 'react';
import propTypes from 'prop-types';
import './movie.css';
import LinesEllipsis from 'react-lines-ellipsis';

class Movie extends Component {
  render() {
    //console.log(this.props);
    return (
        <div className="Movie">
            <div className="Movie_Columns" >
                <MoviePoster poster={this.props.poster} alt={this.props.title}/>
            </div>

            <div className="Movie_Columns" >
                <h1>{this.props.title}</h1>
                <div className="Movie_Genres">
                   {this.props.genres.map((genre, index) => <MovieGenre genre={genre} key={index} /> )}
                </div>
                <p className="Movie_Synopsis">
                    <LinesEllipsis 
                        text={this.props.synopsis}
                        maxLine='3'
                        ellipsis='...'
                        trimRight
                        basedOn='letters'
                    />
                </p>
            </div>
        </div>
    );
  }
}

class MoviePoster extends Component {
    render() {
        
        //console.log(this.props.poster);
        return (
            <img className="Movie_Poster" src={this.props.poster} title={this.props.alt} alt={this.props.alt}/>
        )

    }
}

function MovieGenre({genre}) {
    return (
        <span className="Movie_Genre">{genre} </span>
    )
} 

Movie.propTypes = {
    title: propTypes.string.isRequired,
    poster: propTypes.string.isRequired,
    genres: propTypes.array.isRequired,
    synopsis: propTypes.string.isRequired,
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,

}

MovieGenre.propTypes = {
    genre: propTypes.string.isRequired,
}

//함수형 컴포넌트, state, 라이프 사이클 존재하지 않음, 오로지 return만 존재
// function MoviePoster({poster}){
//     return (
//         <img src={poster} />
//     )
// }

// MoviePoster.propTypes = {
//     poster: propTypes.string.isRequired
// }

export default Movie;
