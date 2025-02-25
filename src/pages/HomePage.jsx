import axios from "../api/axios";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = () => {
    axios.get("/movies").then((res) => {
      setMovies(res.data);
    });
  };

  useEffect(fetchMovies, []);

  return (
    <main>
      <h1>Lista Movies</h1>
      {movies.map((movie) => {
        return (
          <ul key={movie.id}>
            <li>{movie.title}</li>
            {/* <li>{movie.genre}</li> */}
            {/* <li>{movie.release_year}</li> */}
          </ul>
        );
      })}
    </main>
  );
}
