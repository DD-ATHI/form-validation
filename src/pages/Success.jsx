import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Success.css'; // Import specific styles for Success

function Success() {
    return (
        <div className="success-container">
            <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
            <h2>Form Submitted Successfully!</h2>
            <Link to="/" className="home-button">Return to Home</Link>
        </div>
    );
}

export default Success;
