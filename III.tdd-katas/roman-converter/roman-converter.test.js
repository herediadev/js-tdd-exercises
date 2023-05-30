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

    it("For the 35 it will return XXXV", () => {
        //Arrange
        const number = 35;
        const expected = "XXXV";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    })

    it("For the 40 it will return XXXX", () => {
        //Arrange
        const number = 40;
        const expected = "XXXX";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 49 it will return XXXXVIII", () => {
        //Arrange
        const number = 49;
        const expected = "XXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 50 it will return L", () => {
        //Arrange
        const number = 50;
        const expected = "L";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 54 it will return LIIII", () => {
        //Arrange
        const number = 54;
        const expected = "LIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 55 it will return LV", () => {
        //Arrange
        const number = 55;
        const expected = "LV";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 59 it will return LVIIII", () => {
        //Arrange
        const number = 59;
        const expected = "LVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 60 it will return LX", () => {
        //Arrange
        const number = 60;
        const expected = "LX";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 61 it will return LXI", () => {
        //Arrange
        const number = 61;
        const expected = "LXI";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 65 it will return LXV", () => {
        //Arrange
        const number = 65;
        const expected = "LXV";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 80 it will return LXXX", () => {
        //Arrange
        const number = 80;
        const expected = "LXXX";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 89 it will return LXXXVIIII", () => {
        //Arrange
        const number = 89;
        const expected = "LXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 99 it will return LXXXVIIII", () => {
        //Arrange
        const number = 99;
        const expected = "LXXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 100 it will return C", () => {
        //Arrange
        const number = 100;
        const expected = "C";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 299 it will return CCLXXXXVIIII", () => {
        //Arrange
        const number = 299;
        const expected = "CCLXXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 499 it will return CCCCLXXXXVIIII", () => {
        //Arrange
        const number = 499;
        const expected = "CCCCLXXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 500 it will return D", () => {
        //Arrange
        const number = 500;
        const expected = "D";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 509 it will return DVIIII", () => {
        //Arrange
        const number = 509;
        const expected = "DVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 549 it will return DXXXXVIIII", () => {
        //Arrange
        const number = 549;
        const expected = "DXXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 550 it will return DL", () => {
        //Arrange
        const number = 550;
        const expected = "DL";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 999 it will return DCCCCLXXXXVIIII", () => {
        //Arrange
        const number = 999;
        const expected = "DCCCCLXXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 1000 it will return M", () => {
        //Arrange
        const number = 1000;
        const expected = "M";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

    it("For the 2999 it will return MMDCCCCLXXXXVIIII", () => {
        //Arrange
        const number = 2999;
        const expected = "MMDCCCCLXXXXVIIII";

        //Act
        const result = convertToOldRoman(number);

        //Assert
        expect(result).toBe(expected);
    });

})
