const formatCities = (objet, functionTransformation) => {
    return objet.map(element => {
        return functionTransformation(element);
    })
};

module.exports = {
    formatCities
}