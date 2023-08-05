const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
const apiKey =process.env.API_KEY;// Replace with your actual API key

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );

    const weatherData = {
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
    };

    res.json(weatherData);
  } catch (error) {
    res.status(404).json({ message: 'City not found or an error occurred.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
