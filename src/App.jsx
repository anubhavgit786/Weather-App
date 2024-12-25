import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import { FaSun, FaMoon } from 'react-icons/fa'; // Import icons

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'} flex flex-col justify-center items-center`}>
      <button
        onClick={toggleTheme}
        className="absolute top-4 right-4 p-2 rounded-full focus:outline-none"
      >
        {isDarkMode ? <FaSun className="text-yellow-500" /> : <FaMoon className="text-blue-500" />}
      </button>
      <Dashboard isDarkMode={isDarkMode} />
    </div>
  );
};

export default App;