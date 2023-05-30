const addOne = (myArray) => {
    if (!Array.isArray(myArray)) {
        throw new Error("Error");
    }

    return myArray.map(item => item + 1)
};

module.exports = {
    addOne
};
