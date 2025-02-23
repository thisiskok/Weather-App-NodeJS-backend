const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

// Enable CORS
app.use(cors());

// Handle the /weather route
app.get("/weather", async (req, res) => {
  // Get the city from the query parameters
  const city = req.query.city;
  const apiKey = "5f676f59216579a44023cb33cbe03adf";

  // Add your logic here to fetch weather data from the API
  const APIUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
  let weather;
  let error = null;
  
  try {
    const response = await axios.get(APIUrl);
    weather = response.data;
  } catch (error) {
    weather = null;
    error = "Error, Please try again";
  }
  
  res.json({ weather, error });
});

// Start the server and listen on port 4000 or the value of the PORT environment variable
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
}); 