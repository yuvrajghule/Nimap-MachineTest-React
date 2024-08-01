import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useLocation, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
    const query = useQuery().get('query');
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            api.get(`/search/movie`, { params: { query } })
                .then(response => {
                    setMovies(response.data.results);
                    if (response.data.results.length === 0) {
                        setError(`No movies found for "${query}"`);
                    } else {
                        setError(null);
                    }
                })
                .catch(error => {
                    console.error(error);
                    setError('Something went wrong. Please try again.');
                });
        }
    }, [query]);

    return (
        <div className="p-4">
            {error ? (
                <div className="text-center">
                    <p className="text-red-500 text-2xl mb-4">{error}</p>
                    <Link to="/" className="inline-block bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-yellow-600">
                        Go to Home
                    </Link>
                </div>
            ) : (
                <div className="flex flex-wrap justify-center">
                    {movies.map(movie => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;
