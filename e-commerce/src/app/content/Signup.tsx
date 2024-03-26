"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { api } from '~/trpc/react';
import { useMutation } from 'react-query';
import TextInput from '../_components/TextInput';
import { z } from 'zod';
const SignUpInput = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string().min(6),
});

const Signup: React.FC = () => {
  const router = useRouter();
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const [registerUser] = useMutation(api.user.register, {
    input: SignUpInput.parse(data),
    async resolve({ data }) {
      router.push('/login'); // Redirect to login page after successful registration
    },
    onError(error) {
      // Handle registration error
      console.error('Registration error:', error);
    },
  });
  
  // Replace your handleSubmit function with this
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    registerUser.mutate();
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
