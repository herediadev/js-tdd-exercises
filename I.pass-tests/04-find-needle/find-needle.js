const findWordsIndex = (words, word) => {
    if (!Array.isArray(words)) {
        throw new Error("¿Ocurrió un error");
    }
    const isString = words.every(word => typeof word === "string");
    if (!isString) {
        throw new Error("¿Ocurrió un error");
    }
    return words.indexOf(word);
}

module.exports = { findWordsIndex };
