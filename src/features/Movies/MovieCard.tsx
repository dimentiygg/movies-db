import { Link } from "react-router-dom";
import css from "./MovieCard.module.scss";

interface MovieCard {
  id: number;
  title: string;
  overview: string;
  popukarity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
  return (
    <div className={css.card}>
      <img
        className={css.thumbmail}
        src="/public/movie-thumb.png"
        alt="Movie thumbmail"
      />
      <div className={css.content}>
        <Link to={`/movies/${id}`}>{title}</Link>
        <div className={css.overview}>{overview}</div>
        <div className={css.popularity}>{popularity}</div>
      </div>
    </div>
  );
}
