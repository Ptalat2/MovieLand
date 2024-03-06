import React from 'react';
// 7b04f8e0
import { useEffect, useState } from 'react';
import './app.css'
import SearchIcon from './search.svg'
import MovieCard  from './movieCard';

const API_KEY = 'http://www.omdbapi.com?apikey=7b04f8e0';

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


    const searchMovies = async (title) => {
        const res =  await fetch(`${API_KEY}&s=${title}`);
        const data = await res.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Spiderman');
    },[])

   
  
    return (
        <div className="app">
            <h1>MovieLand</h1>

            <div className="search">
                <input
                placeholder='Search for Movies'
                value= {searchTerm}
                onChange={(e)=> setSearchTerm(e.target.value)}
                />
               <img 
               src = {SearchIcon}
               alt = 'Search'
               onClick={()=> searchMovies(searchTerm)}
               />
                
            </div>

            {
                movies?.length >0
                ? ( <div className="container">
               
                {movies.map((movie)=> (
                    <MovieCard movie = {movie}/>
                    
                ))}
                
              </div>) : (<div className="empty">
                <h2>No Movies Found</h2>
              </div>)
            }

           
        </div>
        
    );
}

export default App;