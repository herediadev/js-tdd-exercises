const axios = require("axios");

const getRepos = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data.map((repo) => repo.name);
  } catch (error) {
    throw new Error(error.response.status);
  }
};


module.exports = { getRepos };

// const axios = require("axios");

// const getRepos = (url) => {
//   return axios
//     .get(url)
//     .then((response) => {
//       // console.log(response.data);
//       return response.data.map((repo) => repo.name);
//     })
//     .catch((error) => {
//       // console.log(error.response.data);
//       throw error.code || error.response.data;
//     });
// };
// const getRepos = function(repoName) {
//   return fetch(repoName)
//     .then(data => data.json())
//     .then(function(response) {
//       return response.map(function(rep) {
//         return rep.name;
//       });
//     });
// };

// RECURSOS

// https://www.youtube.com/watch?v=9Yrd4aZkse8
// https://blog.jimmydc.com/mock-asynchronous-functions-with-jest/
