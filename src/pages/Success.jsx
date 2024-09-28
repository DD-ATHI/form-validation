import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import './Success.css';

function Success() {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    navigate('/');
  };

  return (
    <div className="success-container">
      <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
      <h2>Form Submitted Successfully!</h2>
      <button onClick={handleReturnHome} className="home-button">
        Return to Home
      </button>
    </div>
  );
}

export default Success;
