const axios = require("axios");
const MockAdapter = require("axios-mock-adapter");
const { repoNames } = require("./async-2");

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

describe("repoNames", () => {
  it("should return an array of repo names", async () => {
    // Arrange
    mock
      .onGet("https://api.github.com/users/kabaros/repos")
      // posible arguments for reply are (status, data, headers)
      .reply(200, [{ name: "postname-1" }, { name: "postname-2" }]);

          // Act
    const repos = await repoNames("https://api.github.com/users/kabaros/repos");

    // Assert
    expect(repos).toEqual(["postname-1", "postname-2"]);
  });

  it("should return an error if the request fails", async () => {
    mock.onGet("https://api.github.com/users/kabaros/repos").reply(500);

    await expect(
      repoNames("https://api.github.com/users/kabaros/repos")
    ).rejects.toThrow("500");
  });
});


// networkErrorOnce can be used to mock a network error only once
//  => mock.onGet("/users").networkErrorOnce();
// more info in DOC of axios-mock-adapter