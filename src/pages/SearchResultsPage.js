import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import { useLocation, Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination';

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
};

const SearchResultsPage = () => {
    const query = useQuery().get('query');
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            api.get(`/search/movie`, { params: { query, page: currentPage } })
                .then(response => {
                    setMovies(response.data.results);
                    setTotalPages(response.data.total_pages);
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
    }, [query, currentPage]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

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
                <div>
                    <div className="flex flex-wrap justify-center">
                        {movies.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    );
};

export default SearchResultsPage;
