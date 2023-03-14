import React, { useState } from 'react'
import { useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import MovieList from '../component/header/movieList/MovieList';

const Home = () => {

    const [popularMovies,setPopularMovies] = useState([]);

    useEffect(()=>{
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en").then(res=>res.json()).then(data=>setPopularMovies(data.results));
    },[])
    console.log(popularMovies);
  return (
    <>
    <div className="poster">
        <Carousel
        showThumbs={false}
        autoPlay={true}
        transitionTime={3}
        infiniteLoop={true}
        showStatus={false}
        >

            {
                popularMovies.map(movie=>(
                    <Link style={{textDecoration:"none",color:'white'}} to={`movie/${movie.id}`} key={movie.id}>
                    <div className="posterimage">
                        <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} alt=""/>
                    </div>
                    <div className="posterimage-overlay">
                        <div className="posterimage-title">{movie ? movie.original_title:""}</div>
                        <div className="posterimage-rumtime">{movie ? movie.release_date:""}</div>
                    </div>
                    <div className="posterimage_description">
                        {movie?movie.overview:''}
                    </div>
                    </Link>

                ))
            }
        </Carousel>
        <MovieList/>
       
    </div>
    </>
  )
}

export default Home