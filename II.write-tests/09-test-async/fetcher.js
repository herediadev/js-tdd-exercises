const fetch = require("node-fetch");

const fetcher = function(repoName) {
  return fetch(repoName).then(data => data.json());
};

module.exports = fetcher;



// Cambiando el fetch por axios 
// const axios = require("axios");

// const fetcher = async (url) => {
//   try {
//     const response = await axios.get(url);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.status) || error;
//   }
// };

// module.exports = fetcher;
