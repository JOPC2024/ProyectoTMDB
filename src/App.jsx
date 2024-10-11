import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Error404 from './components/Error404/Error404';
import Footer from './components/Footer/Footer';
import MovieDescription from "./components/MovieDescription/MovieDescription";
import ResultsMovies from './components/ResultsMovies/ResultsMovies';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movie/:movieId" element={<MovieDescription/>} />
        <Route path="/search/:nameMovie" element={<ResultsMovies/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App