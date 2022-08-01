const findWordsIndex = (words, word) => {
    if (!Array.isArray(words)) {
        throw new Error("¿Ocurrió un error")
    }
    return words.indexOf(word);
}

module.exports = { findWordsIndex };
