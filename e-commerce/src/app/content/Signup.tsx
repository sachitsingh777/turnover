"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextInput from '../_components/TextInput';

interface FormData {
  name: string;
  email: string;
  password: string;
}

const Signup: React.FC = () => {
  const [data, setData] = useState<FormData>({ name: '', email: '', password: '' });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Your form submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-10 bg-white rounded-[20px] shadow-lg border border-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Create Your Account</h1>
        <form onSubmit={handleSubmit}>
          <TextInput
            name="name"
            type="text"
            label="Name"
            placeholder="Enter your name"
            className="mb-6"
            value={data.name}
            onChange={handleChange}
            labelClassName="text-lg"
          />
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
          <TextInput
            name="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            className="mb-6"
            value={data.password}
            onChange={handleChange}
            labelClassName="text-lg"
          />
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
          >
            Create Account
          </button>
        </form>
        <div className='text-center my-10'>
          Have an account? <span className='font-bold'>Login</span>
        </div>
      </div>
    </div>
  );
};

export default Signup;
