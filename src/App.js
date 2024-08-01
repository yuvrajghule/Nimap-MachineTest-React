import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import TopRatedPage from './pages/TopRatedPage';
import UpcomingPage from './pages/UpcomingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFound from './pages/NotFound';

const App = () => {
    return (
        <Router>
            <div className="min-h-screen bg-gray-700">
                <Navbar />
                <main className="p-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/top-rated" element={<TopRatedPage />} />
                        <Route path="/upcoming" element={<UpcomingPage />} />
                        <Route path="/movie/:id" element={<MovieDetailPage />} />
                        <Route path="/search" element={<SearchResultsPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
};

export default App;
