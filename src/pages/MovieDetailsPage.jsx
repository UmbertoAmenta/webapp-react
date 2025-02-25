import axios from "../api/axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

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
    <main>
      <h1>Pagina di dettaglio</h1>
      <ul>
        <li>{movie.title}</li>
        <li>{movie.genre}</li>
        <li>{movie.release_year}</li>
        <li>{movie.director}</li>
        <li>{movie.avg_vote}</li>
        <li>{movie.abstract}</li>
      </ul>
    </main>
  );
}
