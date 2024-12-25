import React, { useState } from "react";

const WeatherTable = ({ data, isDarkMode }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 7;

  // Calculate total pages
  const totalPages = Math.ceil(data.dates.length / rowsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const currentPageData = {
    dates: data.dates.slice(startIndex, endIndex),
    maxTemps: data.maxTemps.slice(startIndex, endIndex),
    minTemps: data.minTemps.slice(startIndex, endIndex),
    meanTemps: data.meanTemps.slice(startIndex, endIndex),
    maxApparentTemps: data.maxApparentTemps.slice(startIndex, endIndex),
    minApparentTemps: data.minApparentTemps.slice(startIndex, endIndex),
    meanApparentTemps: data.meanApparentTemps.slice(startIndex, endIndex),
  };

  // Handle page navigation
  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="mt-4">
      <h2 className={`text-xl font-bold text-center mb-4 ${isDarkMode ? 'text-white' : 'text-black'}`}>Weather Data Table</h2>

      <table className={`w-full border-collapse border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} text-sm`}>
        <thead>
          <tr>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} whitespace-nowrap`}>Date</th>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>Max Temp (°C)</th>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>Min Temp (°C)</th>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>Mean Temp (°C)</th>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>Max Apparent Temp (°C)</th>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>Min Apparent Temp (°C)</th>
            <th className={`border p-2 ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>Mean Apparent Temp (°C)</th>
          </tr>
        </thead>
        <tbody>
          {currentPageData.dates.map((date, index) => (
            <tr key={index} className={`${isDarkMode ? 'bg-gray-700' : 'bg-white'} ${index % 2 === 0 ? isDarkMode ? 'bg-gray-800' : 'bg-gray-100' : ''}`}>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} whitespace-nowrap`}>{date}</td>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>{currentPageData.maxTemps[index]}</td>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>{currentPageData.minTemps[index]}</td>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>{currentPageData.meanTemps[index]}</td>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>{currentPageData.maxApparentTemps[index]}</td>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>{currentPageData.minApparentTemps[index]}</td>
              <td className={`border p-2 text-center ${isDarkMode ? 'border-gray-600' : 'border-gray-300'}`}>{currentPageData.meanApparentTemps[index]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mt-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-l ${
            currentPage === 1 ? `${isDarkMode ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-200 cursor-not-allowed'}` : "bg-blue-500 text-white dark:bg-blue-700"
          }`}
        >
          Prev
        </button>
        <span className={`px-4 py-2 border ${isDarkMode ? 'border-gray-600 bg-gray-800 text-white' : 'border-gray-300 bg-white text-black'}`}>
            Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border ${isDarkMode ? 'border-gray-600' : 'border-gray-300'} rounded-r ${
            currentPage === totalPages ? `${isDarkMode ? 'bg-gray-700 cursor-not-allowed' : 'bg-gray-200 cursor-not-allowed'}` : "bg-blue-500 text-white dark:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WeatherTable;