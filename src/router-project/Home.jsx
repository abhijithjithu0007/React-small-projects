import React from 'react';

const Home = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto p-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center">
                    Welcome to Your Website
                </h1>
                <p className="mt-6 text-lg text-gray-700 text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec lacus ut velit convallis hendrerit. Suspendisse cursus lectus vitae augue vestibulum fringilla.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <button className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Get Started
                    </button>
                    <button className="inline-block bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-6 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        Learn More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
