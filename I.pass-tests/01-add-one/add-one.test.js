const { addOne } = require("./add-one.js");
//mi version refactor .
describe("Given the addOne function", () => {
  it("should be a function", () => {
    expect(typeof addOne).toBe("function");
  });

  it("will sum plus 1 in each position of a given array before: [31, 57, 12, 5] after: [32, 58, 13, 6]", () => {
    //𝗮𝗿𝗿𝗮𝗻𝗴𝗲 - Inicializacion
    const input = [31, 57, 12, 5];
    const unchanged = [31, 57, 12, 5];
    const expected = [32, 58, 13, 6];
    /*  const voidArray = []; */

    //𝗮𝗰𝘁 - estimulo
    const output = addOne(input);
    //𝗮𝘀𝘀𝗲𝗿𝘁 - Observar el comportamiento
    expect(output).toBe(expected);
    expect(input).toEqual(unchanged);
  });

  /*  it("should throw if not number is provided as paramater", () => {
    expect(output).toEqual(voidArray);
  }); */
});
