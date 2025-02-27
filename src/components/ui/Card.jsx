// UI
import VoteAvgStars from "./VoteStars";

export default function Card({ ...movie }) {
  // console.log(movie.avg_vote);
  return (
    <>
      <li className="bg-white rounded-3xl p-4">
        <div>
          <img
            src={`${import.meta.env.VITE_BE_URL}/${movie.image}`}
            alt={movie.title}
          />
        </div>
        <ul>
          <li>{movie.title}</li>
          <li>{movie.genre}</li>
          <li>
            <VoteAvgStars vote={movie.avg_vote} />
          </li>
        </ul>
      </li>
    </>
  );
}
