import React, { Component } from 'react';
import './App.css';
import Movie from './movie';
 
class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()

  // Update : componentWillReceiveProps() -> shouldComponentUpdate() -> componenetWillUdpate() -> render() -> componentDidUpdate()

  state = {
    //greeting: 'Hello',
    // movies: [
    //   {
    //     title:"Matrix",
    //     poster:"../images/matrix.jpg",
    //   },
    //   {
    //     title:"Full Metal Jacket",
    //     poster:"../images/full metal jacket.jpg",
    //   },
    //   {
    //     title:"Oldboy",
    //     poster:"../images/oldboy.jpg",
    //   },
    //   {
    //     title:"Star Wars",
    //     poster:"../images/star wars.jpeg",
    //   },
    //   {
    //     title: "Train",
    //     poster: ""
    //   },
    // ]
  }

  //렌더링 된 후 데이터 불러오기
  componentDidMount(){

    this._getMovies();

  }

    // set 타임을 활용해서 5초후 state 상태 변경 
    // setTimeout(()=> {
    //   this.setState({
    //     greeting: 'Hello again',
    //   })
    // },5000)


    //옛날 방식 함수 정의
    // setTimeout(function(){
    //   console.log('Hello');
    // }, 1000)


  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      //console.log(movie);
      return <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id} 
        genres={movie.genres}
        synopsis = {movie.synopsis}
      />
    })

    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()   
    this.setState({
      movies
    })
  }

  _callApi = () => {

    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating_count')
    //이게 뭐지.. 일단 이렇게 쓰자, promise 방법
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))

  }
  
  render() {
    return (
      <div className="App">
       {/* basic code */}
        {/* {this.state.greeting}
        {this.state.movies.map((movie, index) => {
          //console.log(movie);
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
          }
        )} */}

        {/* this state movies가 있으면 rendermovies 호출 아니면 'Loading 출력' */}
        {this.state.movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
