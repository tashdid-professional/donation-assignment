import React, { useState } from 'react';

const Banner = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = () => {
        onSearch(searchInput);
    };
        // Define the URL for your background image
        const backgroundImageUrl = '/Clothing.png'; // Replace with your image URL

        // Define the inline styles for the background
        const divStyle = {
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: 'cover', // Adjust to your preference
            // Add other background properties (position, repeat, etc.) as needed
        };

 

    return (
        <div className='space-y-7' style={divStyle}>
            <h1 className='font-bold text-5xl text-center'>I Grow By Helping People In Need</h1>
            <div className='w-[400px] mx-auto '>
                <label htmlFor='search-input' className='sr-only'>Search here</label>
                <input
                    type='text'
                    id='search-input'
                    placeholder='Search here...'
                    className='w-[300px] p-3 text-sm font-normal border-2 rounded-r-none rounded-md'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button
                    type='button'
                    className='bg-[#FF444A] p-3 px-6 rounded-md rounded-l-none text-white hover:bg-red-600 focus:outline-none'
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>
        </div>
    );
};

export default Banner;
