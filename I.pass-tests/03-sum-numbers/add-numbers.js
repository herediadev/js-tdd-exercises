const addAllNumbers = (numbers) =>{
    if (!Array.isArray(numbers)) {
        throw new Error("Error");
    }
    //El método reduce ejecuta callback una vez por cada elemento presente en el array
    //El valor devuelto de la función reductora se asigna al acumulador
    //cuyo valor se recuerda en cada iteración de la matriz y, en última instancia, 
    //se convierte en el valor final, único y resultante
    return numbers.reduce((a, b) => { 
        return a + b;
    });

    /*let sum = 0;
    numbers.forEach(item => {
        sum = sum + item;
    })
    return sum;*/
};
module.exports = {
    addAllNumbers
};
