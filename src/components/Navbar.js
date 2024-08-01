import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [query, setQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() === '') {
            alert('Please enter a search query.');
            return;
        }
        navigate(`/search?query=${query}`);
    };

    return (
        <nav className="bg-gray-800 p-6 flex flex-col md:flex-row justify-between items-center sticky top-0 z-50">
            <div className="flex justify-between items-center w-full md:w-auto">
                <Link to="/" className="text-yellow-500 text-4xl font-bold">MovieDB</Link>
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="text-white md:hidden focus:outline-none"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
            </div>

            <div className={`flex flex-col md:flex-row md:flex md:items-center md:space-x-6 ${isMobileMenuOpen ? 'flex' : 'hidden'} w-full md:w-auto`}>
                <div className="flex flex-col md:flex-row md:space-x-6 mb-4 md:mb-0 w-full md:w-auto">
                    <NavLink 
                        to="/" 
                        className={({ isActive }) => 
                            `text-white px-4 py-3 rounded-md text-xl ${isActive ? 'bg-yellow-500' : 'hover:bg-gray-700'}`
                        }
                    >
                        Popular
                    </NavLink>
                    <NavLink 
                        to="/top-rated" 
                        className={({ isActive }) => 
                            `text-white px-4 py-3 rounded-md text-xl ${isActive ? 'bg-yellow-500' : 'hover:bg-gray-700'}`
                        }
                    >
                        Top Rated
                    </NavLink>
                    <NavLink 
                        to="/upcoming" 
                        className={({ isActive }) => 
                            `text-white px-4 py-3 rounded-md text-xl ${isActive ? 'bg-yellow-500' : 'hover:bg-gray-700'}`
                        }
                    >
                        Upcoming
                    </NavLink>
                </div>

                <form onSubmit={handleSearch} className="flex items-center w-full md:w-auto">
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for a movie..."
                        className="p-3 rounded-l-lg border border-gray-300 w-full md:w-72 text-lg"
                    />
                    <button type="submit" className="ml-2 p-3 bg-yellow-500 text-white rounded-r-lg flex items-center text-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
