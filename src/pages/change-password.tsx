import React, { useState } from 'react';

const ChangePasswordPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleChangePassword = () => {
    // Add logic to change the password here
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-4 text-4xl font-bold">Change Password</h1>
      <form className="rounded bg-white p-6 shadow-md">
        {/* Current Password Input */}
        <div className="mb-4">
          <label
            htmlFor="currentPassword"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            Current Password:
          </label>
          <input
            type="password"
            id="currentPassword"
            name="currentPassword"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Enter your current password"
          />
        </div>

        {/* New Password Input */}
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="mb-2 block text-sm font-bold text-gray-700"
          >
            New Password:
          </label>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full rounded-md border border-gray-400 px-3 py-2 focus:border-indigo-500 focus:outline-none"
            placeholder="Enter your new password"
          />
        </div>

        {/* Change Password Button */}
        <button
          type="button"
          onClick={handleChangePassword}
          className="focus:shadow-outline-blue rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600 focus:outline-none active:bg-blue-700"
        >
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePasswordPage;
