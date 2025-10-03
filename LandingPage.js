import React from 'react';

function LandingPage({ navigate }) {
    return (
        <div className="landing">
            <h1>Welcome to Houseplants Store</h1>
            <p>Your one-stop shop for beautiful indoor plants!</p>
            <button className="get-started" onClick={() => navigate('products')}>Get Started</button>
        </div>
    );
}

export default LandingPage;
