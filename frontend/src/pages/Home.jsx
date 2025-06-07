import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import "../css/Home.css";
import { searchMovies, getPopularMovies } from "../services/api";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = getPopularMovies();
        setMovies(await popularMovies);
      } catch (error) {
        setError("error fetching popular movies");
        console.error("Failed to fetch popular movies:", error);
      } finally {
        setLoading(false);
      }
    };

    loadPopularMovies();
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!searchTerm.trim()) return;
  if (loading) return;
  setLoading(true);

  try {
    const searchResults = await searchMovies(searchTerm);
    setMovies(searchResults);
    setError(null);
  } catch (error) {
    setError("error fetching movies");
    console.error("Failed to fetch movies:", error);
  } finally {
    setLoading(false);
  }

  setSearchTerm("");
};

  return (
    <div className="home">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {error && <p className="error-message">{error}</p>}

      {loading ? (
        <div className="loading">Loading....</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
