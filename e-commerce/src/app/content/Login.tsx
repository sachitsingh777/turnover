"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import TextInput from '../_components/TextInput';
import { z } from 'zod';

// Define input schema for user login
const LoginInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const Login: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState({ email: '', password: '' });

  // Use useMutation hook to handle the user login mutation
  const [loginUser] = useMutation('user.login', {
    input: LoginInput,
    async resolve({ data }) {
      router.push('/dashboard'); // Redirect to dashboard page after successful login
    },
    onError(error) {
      console.error('Login error:', error.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginUser.mutate(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-10 bg-white rounded-lg shadow-lg border border-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Login</h1>
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
