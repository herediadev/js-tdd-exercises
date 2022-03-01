const {fetcher} = require("./fetcher");

const getRepos = (repoName) => {
  return fetcher(repoName)
  .then((response) => {
    return response.map((rep) => {
      return rep.id;
    });
  });
};

module.exports = {
  getRepos
};