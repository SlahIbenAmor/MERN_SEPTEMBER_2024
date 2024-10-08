import React, { useState } from 'react'

function Form() {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value
    });

    
    let error = '';
    switch (name) {
      case 'firstName':
        if (value.length < 2) {
          error = `FirstName must be at least 2 characters.`;
        }
        break;
      case 'lastName':
        if (value.length < 2) {
          error = `LastName must be at least 2 characters.`;
        }
        break;
      case 'email':
        if (value.length < 5) {
          error = 'Email must be at least 5 characters.';
        }
        break;
      case 'password':
      case 'confirmPassword':
        if (name === 'password' && value.length < 8) {
          error = 'Password must be at least 8 characters.';
        } else if (name === 'confirmPassword' && value !== data.password) {
          error = 'Passwords must match.';
        } else if (name === 'password' && data.confirmPassword && value !== data.confirmPassword) {
          error = 'Passwords must match.';
        }
        break;
      default:
        break;
    }

    setErrors({
      ...errors,
      [name]: error
    });
  };

  return (
    <div>
      <form>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={data.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p style={{ color: 'red' }}>{errors.firstName}</p>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={data.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p style={{ color: 'red' }}>{errors.lastName}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={data.confirmPassword}
            onChange={handleChange}
          />
          {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}
        </div>
      </form>

      <h2>Form Data:</h2>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Email: {data.email}</p>
      <p>Password: {data.password}</p>
      <p>Confirm Password: {data.confirmPassword}</p>
    </div>
  );
}

export default Form;
