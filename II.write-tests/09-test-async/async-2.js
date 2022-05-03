const axios = require('axios');

const repoNames = (url) => {
  return axios.get(url)
    .then(response => response.data.map(repo => repo.name))
    .catch(error => {
      throw error;
    });
}

module.exports = {
  repoNames
}


// const fetcher = require("./fetcher");

// const repoNames = (url) => {
//   return fetcher(url).then((repos) => repos.map((repo) => repo.name));
// };

// module.exports = { repoNames };
