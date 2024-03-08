import React from 'react'

const Home = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Welcome to my website!</h1>

            <p className="text-lg">This page should be protected by a PrivateRoutes component for authenticated users</p>
        </div>
    )
}

export default Home
