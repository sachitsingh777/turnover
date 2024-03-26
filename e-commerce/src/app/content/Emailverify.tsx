"use client"
import React, { useState, ChangeEvent, FormEvent } from 'react';
import TextInput from '../_components/TextInput';



const Emailverify: React.FC = () => {
  const [data, setData] = useState("");

 

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-10 bg-white rounded-[20px] shadow-lg border border-black">
        <h1 className="text-3xl font-bold mb-6 text-center">Verify Your Email</h1>
        <p className="text-base mb-6 text-center">Enter the 8-digit code you received on your email</p>
        <form  className="mb-6">
          <div className="flex justify-center mb-6">
            {[...Array(8)].map((_, index) => (
              <input
                key={index}
                name={`code-${index + 1}`}
                className="code-input mr-2"
                maxLength={1}
                autoFocus={index === 0}
               
              />
            ))}
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded hover:bg-gray-800 focus:outline-none focus:ring focus:ring-gray-500"
          >
            Verify
          </button>
        </form>
       
      </div>
    </div>
  );
};

export default Emailverify;
