const {convertToOldRoman} = require("./roman-converter");

describe("convertToOldRoman function", () => {
    it("For the 1 it will return I", () => {
        //Arrange
        const number = 1;
        const expected = "I";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 2 it will return II", () => {
        //Arrange
        const number = 2;
        const expected = "II";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 3 it will return III", () => {
        //Arrange
        const number = 3;
        const expected = "III";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 4 it will return IIII", () => {
        //Arrange
        const number = 4;
        const expected = "IIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 5 it will return V", () => {
        //Arrange
        const number = 5;
        const expected = "V";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 6 it will return VI", () => {
        //Arrange
        const number = 6;
        const expected = "VI";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 7 it will return VII", () => {
        //Arrange
        const number = 7;
        const expected = "VII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 8 it will return VIII", () => {
        //Arrange
        const number = 8;
        const expected = "VIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 9 it will return VIIII", () => {
        //Arrange
        const number = 9;
        const expected = "VIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 10 it will return X", () => {
        //Arrange
        const number = 10;
        const expected = "X";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 11 it will return XI", () => {
        //Arrange
        const number = 11;
        const expected = "XI";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 12 it will return XII", () => {
        //Arrange
        const number = 12;
        const expected = "XII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 13 it will return XIII", () => {
        //Arrange
        const number = 13;
        const expected = "XIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 14 it will return XIIII", () => {
        //Arrange
        const number = 14;
        const expected = "XIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 15 it will return XV", () => {
        //Arrange
        const number = 15;
        const expected = "XV";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 19 it will return XVIIII", () => {
        //Arrange
        const number = 19;
        const expected = "XVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 20 it will return XX", () => {
        //Arrange
        const number = 20;
        const expected = "XX";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 24 it will return XXIIII", () => {
        //Arrange
        const number = 24;
        const expected = "XXIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 25 it will return XXV", () => {
        //Arrange
        const number = 25;
        const expected = "XXV";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 29 it will return XXVIIII", () => {
        //Arrange
        const number = 29;
        const expected = "XXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 30 it will return XXX", () => {
        //Arrange
        const number = 30;
        const expected = "XXX";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })
})