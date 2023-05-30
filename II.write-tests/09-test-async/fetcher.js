import fetch from "node-fetch";

export const fetcher = async (repoName) => {
  const data = await fetch(repoName);
  return await data.json();
};
