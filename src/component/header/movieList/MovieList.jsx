import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../card/Card'

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const {type} = useParams()
    
    useEffect(() => {
        getData()
    },[])
    useEffect(() => {
        getData()
    },[type])

    
    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }
    
    console.log(type);

  return (
      <div className='movis-list'>
        <h2 className='list-title' style={{color:"white",textAlign:"start",marginLeft:"120px",marginTop:"100px"}}>{(type?type:"popular").toUpperCase()}</h2>
        <div className="list-card">
            {
                movieList.map(movie=>(
                    <Card movie={movie}/>
                ))
            }
        </div>

    </div>
  )
}

export default MovieList