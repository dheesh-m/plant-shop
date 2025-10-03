import React, { useState } from 'react';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductListing from './components/ProductListing';
import CartPage from './components/CartPage';

function App() {
    const [page, setPage] = useState('landing');

    const navigate = (target) => setPage(target);

    return (
        <>
            <Header navigate={navigate} />
            {page === 'landing' && <LandingPage navigate={navigate} />}
            {page === 'products' && <ProductListing />}
            {page === 'cart' && <CartPage />}
        </>
    );
}

export default App;
