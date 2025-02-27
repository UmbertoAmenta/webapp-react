import axios from "../api/axios";
import { useEffect, useState } from "react";

// COMPONENTS
import Card from "../components/ui/Card";
// UI
import Heading from "../components/ui/Heading";

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
      <div className="mx-auto max-w-6xl py-5">
        <Heading variant={2}>Lista Movies</Heading>
        <ul className="max-w-6xl mx-auto pt-3 grid grid-cols-3 gap-4">
          {movies.map((movie) => {
            return <Card key={movie.id} {...movie} />;
          })}
        </ul>
      </div>
    </main>
  );
}
