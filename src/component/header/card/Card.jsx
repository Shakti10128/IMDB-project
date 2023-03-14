import React from 'react'
import {useEffect } from 'react'
import { Link } from 'react-router-dom';


const Card = ({movie}) => {
    useEffect(()=>{
        setTimeout(()=>{
        },1500)
    })
  return (
    <div className='movieCard'>
        
        <Link to={`movie/${movie.id}`} style={{textDecoration:'none',color:"white"}} className="cards">
                <img className='card-image' src={`https://image.tmdb.org/t/p/original${movie? movie.poster_path:''}`} alt="" />
                <div className="card-title">{movie?movie.original_title:''}</div>
        </Link>
    </div>
  )
}

export default Card