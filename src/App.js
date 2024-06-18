import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Details } from './pages/details';
import { Home } from './pages/home';


const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon/:name" element={<Details />} />
            </Routes>
        </Router>
    );
};

export default App;
