import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Importing Home component
import Form from './pages/Form'; // Importing Form component
import Success from './pages/Success'; // Importing Success component
import './App.css'; // Import global styles

function App() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </div>
    );
}

export default App;
