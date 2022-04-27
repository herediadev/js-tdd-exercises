const { getRepos } = require("./async-1");

// ?????????????????????
test("list of repositories contain aws-lambda-starter and dom-ajax-repo", () => {
  // arrange
  const url = "https://api.github.com/users/kabaros/repos";
  // act
  return getRepos(url).then((result) => {
    // assert
    expect(result).toContain("aws-lambda-starter");
    expect(result).toContain("dom-ajax-repo");
  });
});
