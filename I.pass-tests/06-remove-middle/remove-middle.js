const removeMiddle = (words) =>{
    if (!Array.isArray(words)) {
        throw new Error("Error");
    }

    const wordMiddle = (words.length -1) /2;
    const middleIndex = words[wordMiddle];
    
    words.splice(wordMiddle, 1);
    return [middleIndex]
}

module.exports = {
    removeMiddle
}
//slice devuelve un arreglo nuevo