import { Link } from "react-router";

// UI
import VoteAvgStars from "./VoteStars";
import Button from "./Button";

export default function Card({ ...movie }) {
  return (
    <>
      <li className="flex bg-white rounded-3xl overflow-hidden hover:scale-115 hover:transition-all duration-300 ease-linear ">
        <div className="w-4/7 aspect-2/3">
          <img
            className="h-full object-cover"
            src={
              movie.image
                ? movie.image
                : "https://png.pngtree.com/png-clipart/20211024/original/pngtree-coming-soon-hints-on-board-png-image_6873031.png"
            }
            alt={movie.title}
          />
        </div>
        <div className="w-3/7 flex flex-col justify-between p-4">
          <ul>
            <li>
              <strong>{movie.title}</strong>
            </li>
            <li>{movie.genre}</li>
            <li>
              <VoteAvgStars vote={movie.avg_vote} />
            </li>
            <li className="text-xs line-clamp-8">{movie.abstract}</li>
          </ul>
          <Link to={`/movies/${movie.id}`}>
            <Button variant="primary">Altro...</Button>
          </Link>
        </div>
      </li>
    </>
  );
}
