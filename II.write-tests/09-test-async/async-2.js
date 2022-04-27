const fetcher = require("./fetcher");

const repoNames = (url) => {
  return fetcher(url).then((repos) => repos.map((repo) => repo.name));
};

module.exports = { repoNames };
