const { addOne } = require("./add-one.js");
//mi version refactor .
describe("Given the addOne function", () => {
  it("will sum plus 1 in each position of a given array before: [31, 57, 12, 5] after: [32, 58, 13, 6]", () => {
    //𝗮𝗿𝗿𝗮𝗻𝗴𝗲
    const input = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    //𝗮𝗰𝘁
    const output = addOne(input);
    //𝗮𝘀𝘀𝗲𝗿𝘁
    expect(output).toEqual(expected);
    expect(input).toEqual(unchanged);
  });
});
