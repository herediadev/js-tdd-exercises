const convertToOldRoman = (number) => {
    let romanNumber = "";

    const buildRomanNumberWith = (ordinalNumber, romanLiteralNumber) => {
        while (number >= ordinalNumber) {
            romanNumber = romanNumber + romanLiteralNumber;
            number = number - ordinalNumber;
        }
    };

    buildRomanNumberWith(1000, "M");
    buildRomanNumberWith(500, "D");
    buildRomanNumberWith(100, "C");
    buildRomanNumberWith(50, "L");
    buildRomanNumberWith(10, "X");
    buildRomanNumberWith(5, "V");
    buildRomanNumberWith(1, "I");

    return romanNumber;
}

module.exports = {
    convertToOldRoman
}
