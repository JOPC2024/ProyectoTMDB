import PropTypes from 'prop-types';
import style from './style.module.css';


CardMovie.propTypes = {
    imgsrc:PropTypes.string,
    movieName:PropTypes.string,
    classPer:PropTypes.string
};

function CardMovie({imgsrc, movieName, classPer}) {
  return (
    <article className={`${style.movies} ${classPer}`}>
        <img src={imgsrc} alt="" />
        <div className={style.movieCardDescription}>
            <p>{movieName}</p>
        </div>
    </article>
  )
}

export default CardMovie