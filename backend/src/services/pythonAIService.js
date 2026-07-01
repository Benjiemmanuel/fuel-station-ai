const axios = require("axios");

// Call Python AI Server
exports.predictFuelDemand = async (day) => {
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/predict",
      {
        day: day,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Python AI Error:", error.message);
    throw new Error("Unable to connect to AI server");
  }
};