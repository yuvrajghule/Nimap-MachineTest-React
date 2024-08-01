import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_BASE_URL } from '../api/api';

const MovieCard = ({ movie }) => {
    // Format the vote_average to 2 decimal places
    const formattedRating = movie.vote_average.toFixed(1);

    return (
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
            <div className="bg-white rounded overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 relative">
                <Link to={`/movie/${movie.id}`}>
                    <div className="relative">
                        <img 
                            src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                            alt={movie.title} 
                            className="w-full h-64 object-cover transition-transform duration-300 hover:opacity-80 md:h-80 lg:h-96" 
                        />
                        <div className="absolute top-2 left-2 bg-red-500 text-white text-xs md:text-sm lg:text-md font-bold py-1 px-2 rounded">
                            {new Date(movie.release_date).getFullYear()}
                        </div>
                    </div>
                </Link>
                <div className="px-3 py-2">
                    <div className="font-bold text-base md:text-lg lg:text-xl mb-2">{movie.title}</div>
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                        <span className="bg-yellow-300 text-gray-800 text-sm md:text-base lg:text-lg font-semibold px-2 py-0.5 rounded">
                            ★ {formattedRating}
                        </span>
                        <span className="text-gray-600 text-xs md:text-sm lg:text-base font-semibold mt-2 md:mt-0">
                            Popularity: {movie.popularity}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;
