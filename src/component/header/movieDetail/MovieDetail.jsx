import React, {useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const MovieDetail = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    return (
        <div className="movie">
            <div className="movie__intro">
                <img className="movie__backdrop" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} 
                 style={{height:"630px",width:"100%"}}
                 />
            </div>


            <div className="posterimage-rumtime" style={{color:"#bac8d1",fontSize:"40px",fontWeight:"bold",marginTop:"80px"}}>{currentMovieDetail ? currentMovieDetail.release_date:""}</div>

            <div className="card-title" style={{color:"#bac8d1",fontSize:"50px",fontWeight:"bold",marginTop:"-120px"}}>{currentMovieDetail?currentMovieDetail.original_title:''}</div>

            <div className="posterimage_description"
            style={{color:"white",fontSize:"20px",fontWeight:"bold",marginTop:"80px",width:"90%"}}
            >
                {currentMovieDetail?currentMovieDetail.overview:''}</div>
        </div>
    )
}

export default MovieDetail