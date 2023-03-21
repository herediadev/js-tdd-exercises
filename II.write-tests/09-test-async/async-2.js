import { fetcher } from "./fetcher";

export const getRepos = async repoName => {
  const response = await fetcher(repoName);
  return response.map(function (rep) {
    return rep.name;
  });
};
