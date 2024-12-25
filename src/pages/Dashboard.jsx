import React, { useState } from "react";
import DashboardInputs from "../components/DashboardInputs";
import WeatherGraph from "../components/WeatherGraph";
import WeatherTable from "../components/WeatherTable";
import Loader from "../components/Loader";
import ErrorDisplay from "../components/ErrorDisplay";
import { fetchWeatherData } from "../services/api";

const Dashboard = ({ isDarkMode }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleFetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await fetchWeatherData(latitude, longitude, startDate, endDate);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || "An error occurred while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`p-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow rounded-lg max-w-5xl w-full mt-4`}>
      <h1 className={`text-2xl font-bold mb-4 text-center ${isDarkMode ? 'text-white' : 'text-black'}`}>Weather Dashboard</h1>
      <DashboardInputs
        latitude={latitude}
        setLatitude={setLatitude}
        longitude={longitude}
        setLongitude={setLongitude}
        startDate={startDate}
        setStartDate={setStartDate}
        endDate={endDate}
        setEndDate={setEndDate}
        fetchData={handleFetchData}
        isDarkMode={isDarkMode}
      />
      {loading && <Loader />}
      {error && <ErrorDisplay message={error} isDarkMode={isDarkMode} />}
      {weatherData && (
        <>
          <WeatherGraph data={weatherData} isDarkMode={isDarkMode} />
          <WeatherTable data={weatherData} isDarkMode={isDarkMode} />
        </>
      )}
    </div>
  );
};

export default Dashboard;