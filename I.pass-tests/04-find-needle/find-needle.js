const findNeedle = (words, expectedWord) => {
    console.log(words)
    console.log(expectedWord)
    
    if(!Array.isArray(words)){
        throw new Error("Error");
    }
    
    const indexArray = (item) => item === expectedWord;

    return words.findIndex(indexArray)
    
}

module.exports = {
    findNeedle
};
