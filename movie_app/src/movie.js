import React, { Component } from 'react';
import propTypes from 'prop-types';
import './movie.css';

class Movie extends Component {

    static propTypes = {
        title: propTypes.string.isRequired,
        poster: propTypes.string
    }

  render() {
    //console.log(this.props);
    return (
        <div className="App">
        <MoviePoster poster={this.props.poster} />
        <h1>{this.props.title}</h1>
        </div>
    );
  }
}

// class MoviePoster extends Component {

//     static propTypes = {
//         poster: propTypes.string.isRequired
//     }

//     render() {
//         //console.log(this.props.poster);
//         return (
//             <img src={this.props.poster} />
//         )
//     }
// }


//함수형 컴포넌트, state, 라이프 사이클 존재하지 않음, 오로지 return만 존재
function MoviePoster({poster}){
    return (
        <img src={poster} />
    )
}

MoviePoster.propTypes = {
    poster: propTypes.string.isRequired
}

export default Movie;
