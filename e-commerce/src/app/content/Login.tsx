"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextInput from '../_components/TextInput';

interface FormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [data, setData] = useState<FormData>({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form submission logic here
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg border border-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
        <p className="text-lg font-bold mb-2 text-center">Welcome back to ECOMMERCE</p>
        <p className="text-base mb-6 text-center">The next gen business marketplace</p>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            className="mb-6"
            value={data.email}
            onChange={handleChange}
            labelClassName="text-lg"
          />
          <div className="relative mb-6">
            <TextInput
              name="password"
              type={showPassword ? 'text' : 'password'}
              label="Password"
              placeholder="Enter your password"
              className="pr-1"
              value={data.password}
              onChange={handleChange}
              labelClassName="text-lg"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-2 top-8 flex items-center px-3 underline-offset-1 focus:outline-none"
            >
              {showPassword ? (
               "show"
              ) : (
                "hide"
              )}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
          >
            Login
          </button>
        </form>
        <div className="text-center my-6">
          Don't have an account? <span className="font-bold">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
