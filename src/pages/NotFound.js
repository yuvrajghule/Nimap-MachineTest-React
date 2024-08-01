import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
            <h1 className="text-6xl font-extrabold mb-4">404</h1>
            <p className="text-2xl mb-8">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="px-4 py-2 bg-yellow-500 rounded-lg text-xl font-semibold hover:bg-yellow-600 transition duration-300">
                Go to Home
            </Link>
        </div>
    );
};

export default NotFound;
