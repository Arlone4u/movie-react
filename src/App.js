import './styles/App.scss';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MovieList from './MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';


const App = () => {
  const [movies2,setMovies2] = useState([ ]);

  const getMovieRequest = async () => {
    const url = 'http://www.omdbapi.com/?s=avengers&apikey=5761f58';

    const response = await fetch(url);
    const responseJson = await response.json();
    
    setMovies2(responseJson.Search);
  }

  useEffect(() => {
    getMovieRequest();
  },[]);

const [movies,setMovies] = useState([  
{
  "Title": "Black Panther",
  "Year": "2018",
  "imdbID": "tt1825683",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SX300.jpg",
  "Price": "200"
},
{
  "Title": "Black Panther: Wakanda Forever",
  "Year": "2022",
  "imdbID": "tt9114286",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNTM4NjIxNmEtYWE5NS00NDczLTkyNWQtYThhNmQyZGQzMjM0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
  "Price": "180"
},
{
  "Title": "Black Panther",
  "Year": "2010",
  "imdbID": "tt1441105",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMDM4YzEwNzItMTg2ZS00MWU4LTlkNDgtODMyMmU0OGQyZTBkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_SX300.jpg",
  "Price": "300"
},
{
  "Title": "The Black Panther",
  "Year": "1977",
  "imdbID": "tt0075764",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZDIzNWI5YzktZDYzNC00ZjU1LTllNTMtMjAwODQ2ZTUyN2JlXkEyXkFqcGdeQXVyMTk5MjAyMjM@._V1_SX300.jpg",
  "Price": "250"
},

{
  "Title": "Warriors: The Black Panther",
  "Year": "1993",
  "imdbID": "tt0107098",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTU5NTQyMjAyMF5BMl5BanBnXkFtZTcwOTk0MzAyMQ@@._V1_SX300.jpg",
  "Price": "270"
},
{
  "Title": "Black Adam",
  "Year": "2022",
  "imdbID": "tt6443346",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzZkOGUwMzMtMTgyNS00YjFlLTg5NzYtZTE3Y2E5YTA5NWIyXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
  "Price": "220"
}, {
  "Title": "The Avengers",
  "Year": "2012",
  "imdbID": "tt0848228",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  "Price": "160"
},
{
  "Title": "Avengers: Endgame",
  "Year": "2019",
  "imdbID": "tt4154796",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  "Price": "350"
},

{
  "Title": "The Avengers",
  "Year": "1998",
  "imdbID": "tt0118661",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYWE1NTdjOWQtYTQ2Ny00Nzc5LWExYzMtNmRlOThmOTE2N2I4XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  "Price": "500"
},
{
  "Title": "The Avengers",
  "Year": "1961–1969",
  "imdbID": "tt0054518",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BZWQwZTdjMDUtNTY1YS00MDI0LWFkNjYtZDA4MDdmZjdlMDRlXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg",
  "Price": "315"
},
{
  "Title": "Avengers Assemble",
  "Year": "2012–2019",
  "imdbID": "tt2455546",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BMTY0NTUyMDQwOV5BMl5BanBnXkFtZTgwNjAwMTA0MDE@._V1_SX300.jpg",
  "Price": "270"
}
]);

  return (
    <div className="App">
      <div >  
        <Navbar/>
      </div>
      <div >
        <Sidebar/>      
      </div>
      <div >
        <MovieList movies = {movies} movies2 = {movies2}/>
      </div>
    </div>
  );
}

export default App;