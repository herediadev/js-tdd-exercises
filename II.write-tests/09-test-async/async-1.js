import fetch from 'node-fetch';

export const getRepos = (repoName) => {
  return fetch(repoName)
    .then(data => data.json())
    .then(function(response) {
      return response.map(function(rep) {
        return rep.name;
      });
    });
};

