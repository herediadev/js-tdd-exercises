const fetch = require("node-fetch");

const getRepos = function(url) {
  return fetch(url)
    .then(data => data.json())
    .then((response) => {
      return response.map((rep) => rep.name);
    }).catch((error) => {
      throw error;
    }
  );
};

module.exports = { 
  getRepos 
};
