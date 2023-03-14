import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './component/header/Header';
import Home from './pages/Home';
import MovieList from './component/header/movieList/MovieList';
import MovieDetail from './component/header/movieDetail/MovieDetail';

// styles files
import './component/header/Header.scss'
import './pages/Home.scss'
import './component/header/card/Card.scss'
import './component/header/movieList/movieList.scss'
import './component/header/movieDetail/MovieDetail.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<MovieDetail/>}/>
        <Route path='/movies/:type' element={<MovieList/>}/>
        <Route path='/*' element={<h1>error page</h1>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
