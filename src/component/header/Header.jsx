import React from 'react'
import { Link } from 'react-router-dom'
// import Card from './card/Card'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerleft">
            <Link to="/" className='link'><img className='header_icon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnlS5R5O6Z97KG2nymyQYDSgh6puyZwXHi5ayXefbctaMjR599LrCsLgSz0hRJXBC85ck&usqp=CAU' alt='' style={{height:"90px",width:"140px",marginLeft:"30px"}}/></Link>
            <Link to="/movies/popular" className='Link'>Popular</Link>
            <Link to="/movies/top_rated" className='Link'>Top Rated</Link>
            <Link to="/movies/upcoming" className='Link'>Upcoming</Link>
        </div>
        
    </div> 
  )
}

export default Header