import React, { useEffect, useState } from 'react';
import { api } from '../api/api';
import MovieCard from '../components/MovieCard';
import Pagination from '../components/Pagination'; // Import the Pagination component

const HomePage = () => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await api.get('/movie/popular', {
                    params: { page: currentPage }
                });
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages); // Assuming your API provides this
            } catch (error) {
                console.error(error);
            }
        };

        fetchMovies();
    }, [currentPage]);

    return (
        <div className="p-4">
            <div className="flex flex-wrap">
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </div>
            <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={(page) => setCurrentPage(page)} 
            />
        </div>
    );
};

export default HomePage;
