const {getRepos} = require("./async-1");

describe("gets a list of repositories names", () => {
  it("Check if it contains 'dom-ajax-repo'", () => {
    // arrange
    const url = "https://api.github.com/users/kabaros/repos";
    // act
    return getRepos(url).then(result => {
      // assert
      //expect(result).toContain("js-exercises");
      expect(result).toContain("dom-ajax-repo");
    });
  });
});
