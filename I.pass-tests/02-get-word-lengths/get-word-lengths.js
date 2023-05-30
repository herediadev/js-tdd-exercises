const getWordLengths = (someWords) => {
    if (!Array.isArray(someWords)) {
        throw new Error("Error");
    }
    
    return someWords.map(item => item.length);
};

module.exports = {
    getWordLengths
};
