import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function Form() {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    mobile: '',
    dob: '',
    gender: '',
    place: '',
    favoriteFood: [],
    interests: [],
  });
  const [errors, setErrors] = useState({});
  const [showMenu, setShowMenu] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: checked ? [...prevValues[name], value] : prevValues[name].filter((v) => v !== value),
      }));
    } else if (type === 'radio') {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: value,
      }));
    }
  };

  const toggleMenu = () => setShowMenu(!showMenu);

  const handleFavoriteFoodChange = (e) => {
    const { value, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      favoriteFood: checked
        ? [...prevValues.favoriteFood, value]
        : prevValues.favoriteFood.filter((item) => item !== value),
    }));
  };

  const validateForm = () => {
    const errors = {};
    if (!formValues.name) errors.name = 'Name is required';
    if (!formValues.email) errors.email = 'Email is required';
    if (!formValues.password) errors.password = 'Password is required';
    if (formValues.password !== formValues.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    if (!formValues.mobile) errors.mobile = 'Mobile number is required';
    if (!formValues.dob) errors.dob = 'Date of Birth is required';
    if (!formValues.gender) errors.gender = 'Gender is required';
    if (!formValues.place) errors.place = 'Place is required';
    if (formValues.favoriteFood.length === 0) errors.favoriteFood = 'Favorite food is required';
    if (formValues.interests.length === 0) errors.interests = 'At least one interest is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/success');
    }
  };

  return (
    <div className="form-container">
      <h2>Fill the Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label className="label">Name: <span className="required">*</span></label>
          <input
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter your name"
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>

        <div className="input-group">
          <label className="label">Email: <span className="required">*</span></label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
            className="input"
            placeholder="Give your email"
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        <div className="input-group">
          <label className="label">Password: <span className="required">*</span></label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter your password"
          />
          {errors.password && <p className="error">{errors.password}</p>}
        </div>

        <div className="input-group">
          <label className="label">Confirm Password: <span className="required">*</span></label>
          <input
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInputChange}
            className="input"
            placeholder="Confirm your password"
          />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
        </div>

        <div className="input-group">
          <label className="label">Mobile Number: <span className="required">*</span></label>
          <input
            type="text"
            name="mobile"
            value={formValues.mobile}
            onChange={handleInputChange}
            className="input"
            placeholder="Enter your mobile number"
          />
          {errors.mobile && <p className="error">{errors.mobile}</p>}
        </div>

        <div className="input-group">
          <label className="label">Date of Birth: <span className="required">*</span></label>
          <input
            type="date"
            name="dob"
            value={formValues.dob}
            onChange={handleInputChange}
            className="input"
          />
          {errors.dob && <p className="error">{errors.dob}</p>}
        </div>

        <div className="input-group">
          <label className="label">Gender: <span className="required">*</span></label>
          <div className="radio-group">
            <label><input type="radio" name="gender" value="Male" onChange={handleInputChange} checked={formValues.gender === 'Male'} /> Male</label>
            <label><input type="radio" name="gender" value="Female" onChange={handleInputChange} checked={formValues.gender === 'Female'} /> Female</label>
            <label><input type="radio" name="gender" value="Other" onChange={handleInputChange} checked={formValues.gender === 'Other'} /> Other</label>
          </div>
          {errors.gender && <p className="error">{errors.gender}</p>}
        </div>

        <div className="input-group">
          <label className="label">Place: <span className="required">*</span></label>
          <select
            name="place"
            value={formValues.place}
            onChange={handleInputChange}
            className="input"
          >
            <option value="">Select your place</option>
            <option value="Madurai">Madurai</option>
            <option value="Chennai">Chennai</option>
            <option value="Trichy">Trichy</option>
          </select>
          {errors.place && <p className="error">{errors.place}</p>}
        </div>

        <div className="input-group">
          <label className="label">Favorite Food: <span className="required">*</span></label>
          <div className="custom-select" onClick={toggleMenu}>
            <input
              type="text"
              id="favorite-food-display"
              value={formValues.favoriteFood.join(', ')}
              placeholder="Select your favorite food..."
              readOnly
              className="input"
            />
            {showMenu && (
              <div id="favorite-food-menu" className="select-items">
                <label><input type="checkbox" value="Pizza" onChange={handleFavoriteFoodChange} checked={formValues.favoriteFood.includes('Pizza')} /> Pizza</label>
                <label><input type="checkbox" value="Burger" onChange={handleFavoriteFoodChange} checked={formValues.favoriteFood.includes('Burger')} /> Burger</label>
                <label><input type="checkbox" value="Fried Rice" onChange={handleFavoriteFoodChange} checked={formValues.favoriteFood.includes('Fried Rice')} /> Fried Rice</label>
                <label><input type="checkbox" value="Pasta" onChange={handleFavoriteFoodChange} checked={formValues.favoriteFood.includes('Pasta')} /> Pasta</label>
                <label><input type="checkbox" value="Biriyani" onChange={handleFavoriteFoodChange} checked={formValues.favoriteFood.includes('Biriyani')} /> Biriyani</label>
              </div>
            )}
          </div>
          {errors.favoriteFood && <p className="error">{errors.favoriteFood}</p>}
        </div>

        <div className="input-group">
          <label className="label">Interests: <span className="required">*</span></label>
          <div className="checkbox-group">
            <label><input type="checkbox" name="interests" value="Sports" onChange={handleInputChange} checked={formValues.interests.includes('Sports')} /> Sports</label>
            <label><input type="checkbox" name="interests" value="Music" onChange={handleInputChange} checked={formValues.interests.includes('Music')} /> Music</label>
            <label><input type="checkbox" name="interests" value="Reading" onChange={handleInputChange} checked={formValues.interests.includes('Reading')} /> Reading</label>
            <label><input type="checkbox" name="interests" value="Traveling" onChange={handleInputChange} checked={formValues.interests.includes('Traveling')} /> Traveling</label>
          </div>
          {errors.interests && <p className="error">{errors.interests}</p>}
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
