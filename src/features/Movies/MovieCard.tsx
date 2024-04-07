import { Link } from "react-router-dom";

interface MovieCard {
  id: number;
  title: string;
  overview: string;
  popukarity: number;
}

export function MovieCard({ id, title, overview, popularity }: MovieCardProps) {
  return (
    <div className="Movies-card">
      <Link to={`/movies/${id}`}>{title}</Link>
      <div className="Movies-card-overview">{overview}</div>
      <div className="Movies-card-pop">{popularity}</div>
    </div>
  );
}
