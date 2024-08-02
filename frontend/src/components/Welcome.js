import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Welcome = () => {
  const { user, logout } = useContext(UserContext);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Welcome, {user}!</h2>
        <button
          onClick={logout}
          className="py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Welcome;
