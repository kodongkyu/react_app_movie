import React, { Component } from 'react';
import './App.css';
import Movie from './movie';

const movies = [
  {
    title:"Matrix",
    poster:"../images/matrix.jpg",
  },
  {
    title:"Full Metal Jacket",
    poster:"../images/full metal jacket.jpg",
  },
  {
    title:"Oldboy",
    poster:"../images/oldboy.jpg",
  },
  {
    title:"Star Wars",
    poster:"../images/star wars.jpeg",
  },
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          //console.log(movie);
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
          }
        )}
      </div>
    );
  }
}

export default App;
