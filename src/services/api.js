import axios from "axios";

export const fetchWeatherData = async (latitude, longitude, startDate, endDate) => 
{
  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&start_date=${startDate}&end_date=${endDate}&daily=temperature_2m_max,temperature_2m_min,temperature_2m_mean,apparent_temperature_max,apparent_temperature_min,apparent_temperature_mean&timezone=auto`;
  const response = await axios.get(url);
  const { daily } = response.data;

  const data = {
    dates: daily.time,
    maxTemps: daily.temperature_2m_max,
    minTemps: daily.temperature_2m_min,
    meanTemps: daily.temperature_2m_mean,
    maxApparentTemps: daily.apparent_temperature_max,
    minApparentTemps: daily.apparent_temperature_min,
    meanApparentTemps: daily.apparent_temperature_mean,
  };

 

  return data;
};

/*
Maximum Temperature (2 m)
Minimum Temperature (2 m)
Mean Temperature (2 m)
Maximum Apparent Temperature (2 m)
Minimum Apparent Temperature (2 m)
Mean Apparent Temperature (2 m)
*/