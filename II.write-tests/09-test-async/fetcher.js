const axios = require("axios");

const fetcher = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(error.response.status) || error;
  }
};

module.exports = fetcher;
