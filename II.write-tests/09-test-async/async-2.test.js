import {getRepos} from "./async-2";
import {fetcher} from "./fetcher";
import { describe, it, expect, vi } from "vitest";

vi.mock("./fetcher");

describe('gets a list of repositories names', () => {
    it('should be a function', () => {
      // Act and Assert
      expect(typeof getRepos).toBe('function');
    });
    
    it("gets a list of repositories names with mock", async function() {
        // arrange
        fetcher.mockResolvedValue([{ name: "js-exercises" }]);
        var url = "https://api.github.com/users/kabaros/repos";

        // act
        const result = await getRepos(url);

        // assert
        expect(result).toContain("js-exercises");
    });

    it("should catch the error when fetcher returns an error with status code", async () => {
        // arrange
        fetcher.mockRejectedValue(new Error("Error fetching repositories", {cause: {statusError: 500}}));
        const url = "https://api.github.com/users/kabaros/repos";
      
        // act
        try {
            return await getRepos(url);
        } catch (error) {
            // assert
            expect(error).toBeDefined();
            expect(error.message).toBe("Error fetching repositories");
            expect(error.cause.statusError).toBe(500);
        }
    });

    it("should return empty array when the list of repositories are empty", async () => {
        // arrange
        fetcher.mockResolvedValue([]);
        const url = "https://api.github.com/users/kabaros/repos";
      
        // act
        const result = await getRepos(url);

        // assert
        expect(result).toEqual([]);
    });
    
    it("a more deterministic test", function() {});
})

