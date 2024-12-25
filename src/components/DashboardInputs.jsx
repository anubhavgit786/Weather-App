import React, { useState } from "react";

const DashboardInputs = ({
  latitude,
  setLatitude,
  longitude,
  setLongitude,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  fetchData,
  isDarkMode,
}) => {
  const [error, setError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();

    const lat = parseFloat(latitude);
    const lon = parseFloat(longitude);

    if (isNaN(lat) || lat < -90 || lat > 90) {
      setError("Latitude must be a number between -90 and 90.");
      return;
    }
    if (isNaN(lon) || lon < -180 || lon > 180) {
      setError("Longitude must be a number between -180 and 180.");
      return;
    }

    setError("");
    fetchData();
  };

  return (
    <form className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="latitude" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Latitude:</label>
        <input
          type="number"
          id="latitude"
          name="latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          placeholder="Enter latitude (-90 to 90)"
          className={`border p-2 w-full rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
        />
      </div>
      <div>
        <label htmlFor="longitude" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Longitude:</label>
        <input
          type="number"
          id="longitude"
          name="longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          placeholder="Enter longitude (-180 to 180)"
          className={`border p-2 w-full rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
        />
      </div>
      <div>
        <label htmlFor="startDate" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>Start Date:</label>
        <input
          type="date"
          id="startDate"
          name="startDate"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className={`border p-2 w-full rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
          max={today}
        />
      </div>
      <div>
        <label htmlFor="endDate" className={`block text-sm font-medium mb-1 ${isDarkMode ? 'text-white' : 'text-black'}`}>End Date:</label>
        <input
          type="date"
          id="endDate"
          name="endDate"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className={`border p-2 w-full rounded ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
          max={today}
        />
      </div>
      {error && (
        <div className="col-span-full">
          <p className="text-red-500 text-sm">{error}</p>
        </div>
      )}
      <input
        type="submit"
        value="Fetch Weather Data"
        className="col-span-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
      />
    </form>
  );
};

export default DashboardInputs;