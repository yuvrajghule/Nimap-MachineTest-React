import React, { useEffect, useState } from 'react';
import { api, IMAGE_BASE_URL } from '../api/api';
import { useParams, Link } from 'react-router-dom';

const MovieDetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [cast, setCast] = useState([]);

    useEffect(() => {
        api.get(`/movie/${id}`)
            .then(response => setMovie(response.data))
            .catch(error => console.error(error));

        api.get(`/movie/${id}/credits`)
            .then(response => setCast(response.data.cast))
            .catch(error => console.error(error));
    }, [id]);

    if (!movie) return <div className="text-center text-white mt-10">Loading...</div>;

    return (
        <div className="p-6 bg-gray-900 text-white min-h-screen">
            <Link to="/" className="text-blue-500 mb-4 inline-block">&larr; Back to List</Link>
            <div className="flex flex-col md:flex-row items-start mb-6 border-b border-gray-800 pb-4">
                <img 
                    src={`${IMAGE_BASE_URL}${movie.poster_path}`} 
                    alt={movie.title} 
                    className="w-full md:w-1/4 object-cover rounded shadow-lg mb-4 md:mb-0" 
                />
                <div className="md:ml-6 md:w-3/4">
                    <h1 className="text-3xl md:text-4xl font-bold mb-2">{movie.title}</h1>
                    <div className="text-base md:text-lg flex items-center mb-4">
                        <span className="text-yellow-500 font-bold mr-4">Rating: {movie.vote_average}</span>
                        <span className="mr-4">{movie.runtime} min</span>
                        <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
                    </div>
                    <p className="text-gray-400 mb-2"><strong>Release Date:</strong> {new Date(movie.release_date).toLocaleDateString()}</p>
                    <h2 className="text-xl md:text-2xl font-semibold mb-2">Overview</h2>
                    <p className="text-gray-300">{movie.overview}</p>
                </div>
            </div>
            <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 border-b border-gray-800 pb-2">Cast</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {cast.map(member => (
                    <div key={member.cast_id} className="w-1/4 sm:w-1/6 md:w-1/6 p-2 flex flex-col items-center">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-center p-2 transition duration-300 transform hover:scale-105">
                            <img 
                                src={member.profile_path ? `${IMAGE_BASE_URL}${member.profile_path}` : 'https://previews.123rf.com/images/urfandadashov/urfandadashov1809/urfandadashov180901275/109135379-photo-not-available-vector-icon-isolated-on-transparent-background-photo-not-available-logo-concept.jpg'} 
                                alt={member.name} 
                                className="absolute inset-0 w-full h-full object-cover rounded-full" 
                            />
                        </div>
                        <p className="font-bold text-xs sm:text-sm md:text-base text-white mt-2">{member.name}</p>
                        <p className="text-gray-300 text-xs">{member.character}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieDetailPage;
