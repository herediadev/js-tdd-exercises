import { arrow, defaultParameter, combineArrays, destructuring, templateString } from "./es6";
import {describe , it , expect} from "vitest";

describe("Testing changes to ES6 functions", () => {

  it("function arrow is instance of a function", () => {
    expect(arrow).toBeInstanceOf(Function);
  });

  it("function arrow returns a string of es6 is awesome", () => {
    expect(arrow()).toEqual("es6 is awesome!");
  });

  it("defaultParameter function should return sam if no name argument passed in", () => {
    expect(defaultParameter()).toEqual("sam");
  });

  it("defaultParameter function should return name if name argument is passed in", () => {
    expect(defaultParameter("samatar")).toEqual("samatar");
  });

  it("combineArrays function should combine arr1 and arr2", () => {
    const arr1 = [1, 2, 3];
    const arr2 = [4, 5, 6];

    expect(combineArrays(arr1, arr2)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("destructuring function should return cyf property of object", () => {
    const testObj = {
      cyf: "awesome",
      test: "100%",
      learning: "always"
    };
    expect(destructuring(testObj)).toEqual("awesome");
  });
  
  it("templateString should return a string with the sum of parameter a and b", () => {
    expect(templateString(1, 2)).toEqual("The sum is equal to 3");
  });
})









