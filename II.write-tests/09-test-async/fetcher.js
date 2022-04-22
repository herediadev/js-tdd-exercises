const fetch = require("node-fetch");

const fetcher = (repoName) => {
  return fetch(repoName).then(data => data.json());
};

module.exports = fetcher;
