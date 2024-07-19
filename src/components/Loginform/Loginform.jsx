import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../slices/authSlice';
import image from '../images/image.jpg';
import './Loginform.css';

function LoginForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(formData));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="flex flex-col md:flex-row w-full h-545 max-w-4xl p-8 bg-white rounded-lg shadow-md">
        <div className="w-full md:w-1/2 space-y-6 flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-6">
            <h1 className="text-4xl font-semibold text-center text-blue-600">Log In</h1>
            <div>
              <input
                type="text"
                name="email"
                placeholder="Username/Email"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-200 focus:outline-none focus:ring focus:ring-blue-200"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={loading}
                className="w-full md:w-40 p-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200"
              >
                Log In
              </button>
            </div>
            {error && <p className="text-red-500 text-center">{error.message}</p>}
          </form>
          <p className="text-center text-gray-400">
            New user? <a href="/CreateAccount" className="text-blue-600 hover:underline">Create account</a>
          </p>
        </div>
        <div className="hidden md:flex justify-center items-center w-1/2">
          <img src={image} alt="Login Illustration" className="w-52 h-72" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
