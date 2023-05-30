const PasswordVerifier = require("./password-verifier");

describe("PasswordVerifier function", () => {
    it("Should exist", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("1234");

        //Act
        const isInstanceOfPasswordVerifier = passwordVerifier instanceof PasswordVerifier;

        //Assert
        expect(isInstanceOfPasswordVerifier).toBe(true);
    });

    it("Password is grather than 8 characters", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("1234");

        //Act and assert
        expect(() => passwordVerifier.isLengthGratherThan(8)).toThrow("The password cannot contain less than 8 characters");
    });

    it("Password should not be null", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier(null);

        //Act and assert
        expect(() => passwordVerifier.isNotNull()).toThrow("The password cannot be null");
    });

    it("Password should be contain at least one uppercase", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("123hola");

        //Act and assert
        expect(() => passwordVerifier.isNotContainToUppercase()).toThrow("The password should be contain at least one uppercase");
    });

    it("Password should be contain at least one lowercase", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("123HOLA");

        //Act and assert
        expect(() => passwordVerifier.isNotContainToLowercase()).toThrow("The password should be contain at least one lowercase");
    });

    it("Password should be contain at least one number", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("holaHOLA");

        //Act and assert
        expect(() => passwordVerifier.isNotContainNumber()).toThrow("The password should be contain at least one number");
    });

    it("If password doesn't contain lowercase should return 'Not OK'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("1234HOLA");

        //Act
        const result = passwordVerifier.verify();

        //Assert
        expect(result).toBe("Not OK");
    });

    it("if the password doesn't contain more than 8 characters it should return 'Not OK'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("12Hola");

        //Act
        const result = passwordVerifier.verify();

        //Assert
        expect(result).toBe("OK");
    });

    it("if the password is null it should return 'Not OK'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier(null);

        //Act
        const result = passwordVerifier.verify();

        //Assert
        expect(result).toBe("Not OK");
    });

    it("if the password doesn't contain uppercase it should return 'Not OK'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("1234hola");

        //Act
        const result = passwordVerifier.verify();

        //Assert
        expect(result).toBe("OK");
    });

    it("if the password doesn't contain one number at least it should return 'Not OK'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("holaHOLA");

        //Act
        const result = passwordVerifier.verify();

        //Assert
        expect(result).toBe("OK");
    });

    it("if the password is '1234hola' should return 'OK'", () => {
        //Arrange
        const passwordVerifier = new PasswordVerifier("1234hola");

        //Act
        const result = passwordVerifier.verify();

        //Assert
        expect(result).toBe("OK");
    });

    

});