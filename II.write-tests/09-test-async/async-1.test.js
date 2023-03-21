import {getRepos} from "./async-1";
import { describe, it , expect } from "vitest";

describe('gets a list of repositories names', () => {
  it('should be a function', () => {
    // Act and Assert
    expect(typeof getRepos).toBe('function');
  });

  it("gets a list of repositories names", async function() {
    // arrange
    var url = "https://api.github.com/users/kabaros/repos";
    // act
    const result = await getRepos(url);
    // assert
    expect(result).not.toContain("js-exercises");
    expect(result).toContain("dom-ajax-repo");
  });
})
