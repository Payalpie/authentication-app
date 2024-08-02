import React, { useContext, useState } from "react";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Welcome from "./components/Welcome";
import { UserContext, UserProvider } from "./UserContext";

const App = () => {
  return (
    <UserProvider>
      <MainApp />
    </UserProvider>
  );
};

const MainApp = () => {
  const { user } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="App min-h-screen bg-gray-100 flex flex-col">
      {user ? (
        <Welcome />
      ) : (
        <>
          <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          <div className="flex-grow flex items-center justify-center">
            {activeTab === "login" ? <Login /> : <Signup />}
          </div>
        </>
      )}
    </div>
  );
};

const Navbar = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MyApp</div>
        <div className="space-x-4">
          <button
            onClick={() => setActiveTab("login")}
            className={`py-2 px-4 rounded ${
              activeTab === "login" ? "bg-blue-700" : "bg-blue-500"
            } hover:bg-blue-600`}
          >
            Login
          </button>
          <button
            onClick={() => setActiveTab("signup")}
            className={`py-2 px-4 rounded ${
              activeTab === "signup" ? "bg-blue-700" : "bg-blue-500"
            } hover:bg-blue-600`}
          >
            Signup
          </button>
        </div>
      </div>
    </nav>
  );
};

export default App;
