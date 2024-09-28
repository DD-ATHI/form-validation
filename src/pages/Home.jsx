import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>Welcome to Our Application</h1>
      <Link to="/form" className="button">Go to Form</Link>
    </div>
  );
}

export default Home;
