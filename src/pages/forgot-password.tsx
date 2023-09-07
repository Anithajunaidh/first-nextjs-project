import React, { useState } from 'react';

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleForgotPassword = () => {
    // Add logic to send a password reset email here
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Forgot Password</h1>
      <form className="rounded bg-white p-6 shadow-md">
        {/* Email Input */}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Forgot Password Button */}
        <button
          type="button"
          onClick={handleForgotPassword}
          className="focus:shadow-outline-red rounded-full bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-600 focus:outline-none active:bg-red-700"
        >
          Forgot Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
