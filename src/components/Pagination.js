import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const maxButtons = 5;

    const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
    const endPage = Math.min(totalPages, startPage + maxButtons - 1);

    const adjustedStartPage = Math.max(1, endPage - maxButtons + 1);

    const pages = Array.from({ length: endPage - adjustedStartPage + 1 }, (_, i) => adjustedStartPage + i);

    return (
        <div className="flex justify-center items-center space-x-2 my-4">
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full disabled:opacity-50"
            >
                &laquo;
            </button>
            {pages.length > 0 && pages.map(page => (
                <button
                    key={page}
                    onClick={() => onPageChange(page)}
                    className={`w-8 h-8 flex items-center justify-center ${currentPage === page ? 'bg-yellow-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-full`}
                >
                    {page}
                </button>
            ))}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-8 h-8 flex items-center justify-center bg-yellow-500 text-white rounded-full disabled:opacity-50"
            >
                &raquo;
            </button>
        </div>
    );
};

export default Pagination;
