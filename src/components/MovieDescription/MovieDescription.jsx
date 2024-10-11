import React from 'react'
import { Navigate, useParams } from 'react-router-dom';
import CardMovie from '../CardMovie/CardMovie';
import style from './style.module.css';
import { useEffect } from 'react';

const APIIMG = import.meta.env.VITE_TMDB_API_IMG;
const APIURL = import.meta.env.VITE_TMDB_API_URL;
const APIKEY = import.meta.env.VITE_TMDB_APIKEY;



function MovieDescription() {
    const  { movieId } = useParams();
    const [ movieDesc, setMovieDesc ] = React.useState([]);

    useEffect(() => {
        fetch(APIURL+movieId+'?api_key='+APIKEY)
        .then(res => {
            if(res.status != 200){
                return setMovieDesc([]);
            }
            return res.json();
        })
        .then(data => setMovieDesc(data))
        .catch(error => console.log(error));
    },[]);

    if(!movieDesc){
        return <Navigate to="*" />;
    }

    return (
    <main>
        <section className={style.containerMovieDesc}>
            <article className={style.displayMovie}>
                {<CardMovie imgsrc={APIIMG+movieDesc.poster_path} movieName={movieDesc.title} />}
            </article>
            <article className={style.descMovie}>
                <h1>{movieDesc.title}</h1>
                {movieDesc.overview}
            </article>
        </section>
    </main>
  )
}

export default MovieDescription