const PasswordVerifier = require("./password-verifier");

describe("PasswordVerifier function", () => {
    it("should exist", () => {
        const passwordVerifier = new PasswordVerifier("1234");
        const isInstanceOfPasswordVerifier = passwordVerifier instanceof PasswordVerifier;
        expect(isInstanceOfPasswordVerifier).toBe(true);
    });

    it("password is grather than 8 characters", () => {
        const passwordVerifier = new PasswordVerifier("1234");
        expect(() => passwordVerifier.isLengthGratherThan(8)).toThrow("La password no puede contener menos de 8 caracteres");
    });



});