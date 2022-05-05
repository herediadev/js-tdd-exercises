const fetch = require("node-fetch");
const { getRepos } = require("./async-1");

jest.mock("node-fetch");

describe("The getRepos function will fetch all the repository names from a url like 'https://api.github.com/users/USERNAME/repos'.", () => {
  
  test("Given a valid URL and making a mock to not query the API, you should go through the array and return an array with just the names.", () => {
    // arrange
     const url = "https://api.github.com/users/kabaros/repos";
    
    fetch.mockResolvedValueOnce({
      json: () => Promise.resolve([{ name: "repo1", test: "pepe1" }, { name: "repo2", test: "pepe2" }]),
    });

    // act
    return getRepos(url).then(
      (repos) => {

        // assert
        expect(repos).toEqual(["repo1", "repo2"]);
      }
    );
  });

  test("Simulating a 404 error case, this should throw an error with its respective error.status === 404", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // mock rejected
    fetch.mockRejectedValueOnce({
      // json: () => Promise.reject({
        status: 404,
      // }),
    });


    // act
    return getRepos(url).catch(
      (error) => {
        // assert
        expect(error.status).toBe(404);
      }
    );

  })
});

