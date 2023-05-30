const {getRepos} = require("./async-1");

describe("Function getRepos", () => {
  it("Check if it contains 'dom-ajax-repo'", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    const result = await getRepos(url);
      // assert
      //expect(result).toContain("js-exercises");
      expect(result).toContain("dom-ajax-repo");
    
  });
});
