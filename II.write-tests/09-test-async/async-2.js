const {fetcher} = require("./fetcher");

const getRepos = (repoName) => {
  return fetcher(repoName).then(response => {
    return response.map(rep => {
      return rep.name;
    });
  });
};

module.exports = {
  getRepos};
