export const passwordVerification = (string) => {
    // if(string === null) {
    //     throw new Error('Password should not be null')
    // };
    // if(/[a-z]/.test(string) === false) {
    //     throw new Error('Password should have one lowercase letter at least')
    // };

    let errorsArray = []

    const functionsToTest = [
        {function: (string) => string === null, message: "Password should not be null", priority: 1},
        {function: (string) => /[a-z]/.test(string) === false, message: "Password should have one lowercase letter at least", priority: 1},
        {function: (string) => string.length < 8, message: "be at least 8 characters long", priority: 2},
        {function: (string) => /[A-Z]/.test(string), message: "have one uppercase letter at least", priority: 2},
        {function: (string) => /\d/.test(string), message: "have one number at least", priority: 2},
    ]

    for (const element of functionsToTest) {
        if (element.function(string) && element.priority === 2) {
            return 'OK';
        }else if(element.function(string) && element.priority === 1){
            throw new Error(element.message)
        }
        errorsArray.push(element.message);
    }
    // if(string.length < 8) {
    //     errorsArray.push('be at least 8 characters long')
    // };
    // if(/[A-Z]/.test(string) === false) {
    //     errorsArray.push('have one uppercase letter at least')
    // };
    // if(/\d/.test(string) === false) {
    //     errorsArray.push('have one number at least')
    // };

    throw new Error('Password should ' + errorsArray.join(', '))
}