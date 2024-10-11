import { useState, useEffect } from 'react';
import {ArrowLeft, ArrowRight} from 'react-feather';
import { Link } from "react-router-dom";
import CardMovie from '../CardMovie/CardMovie';
import style from './style.module.css';

const APIIMG = import.meta.env.VITE_TMDB_API_IMG;
const APIURL = import.meta.env.VITE_TMDB_API_URL;
const APIKEY = import.meta.env.VITE_TMDB_APIKEY;


function Home() {

  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(APIURL+'popular?api_key='+APIKEY+'&page='+page)
    .then(res => {
        if(res.status != 200){
          throw new Error("No se encontro");
        }
        return res.json();
    })
    .then(data => setMovies(data.results))
    .catch(error => console.log(error));
  },[page]);

  return (
    <main>
      <section className={style.containerMovies}>
            {movies.map((movie) => (
              <Link key={movie.id} to={`/movie/${movie.id}`} >
                <CardMovie key={movie.id} imgsrc={APIIMG+movie.poster_path} urlMovie={movie.id} movieName={movie.title} classPer={style.moviesEffect}/>
              </Link>
            ))}
      </section>
      <section className={style.pagination}>
              <article onClick={() => ((page>1)?setPage(page-1):'')} className={style.pagArrow}>
                <ArrowLeft/>
              </article>
              <article>{page}</article>
              <article onClick={() => ((page<500)?setPage(page+1):'')} className={style.pagArrow}>
                <ArrowRight/>
              </article>
      </section>
    </main>
  )
}

export default Home