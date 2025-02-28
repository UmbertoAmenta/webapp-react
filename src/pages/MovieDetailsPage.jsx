import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

// COMPONENTS
import Review from "../components/Review";

// UI
import VoteAvgStars from "../components/ui/VoteStars";
import Heading from "../components/ui/Heading";

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();

  const fetchMovie = () => {
    axios
      .get(`/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
      })
      .catch((error) => {
        if (error.status === 404) {
          navigate("/404");
        }
      });
  };

  useEffect(fetchMovie, [id, useNavigate]);

  return (
    <main className="max-w-6xl m-auto p-10 ">
      <div className="flex w-full">
        <img
          className="h-full w-1/3 aspect-2/3 object-cover rounded-l-3xl"
          src={
            movie.image
              ? movie.image
              : "https://png.pngtree.com/png-clipart/20211024/original/pngtree-coming-soon-hints-on-board-png-image_6873031.png"
          }
          alt={movie.title}
        />
        <ul className="bg-white p-10 rounded-r-3xl space-y-3 flex-1">
          <li className="text-3xl">
            <strong>{movie.title}</strong>
          </li>
          <li>{movie.genre}</li>
          <li>
            <VoteAvgStars vote={movie.avg_vote} />
          </li>
          <li>{movie.director}</li>
          <li>{movie.release_year}</li>
          <li>{movie.abstract}</li>
        </ul>
      </div>

      {movie.reviews?.length > 0 && (
        <section className="bg-white rounded-3xl mt-5 p-4">
          <Heading level={2}>Recensioni</Heading>
          <ul>
            {movie?.reviews?.map((review) => (
              <li className="py-5" key={review.id}>
                <Review review={review} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
