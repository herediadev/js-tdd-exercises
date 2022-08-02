const sales = (carsSold) => {
    if (!Array.isArray(carsSold)) {
        throw new Error("¡Ocurrió un error!")
    }
    const isObject = carsSold.every(obj => typeof obj === "object");
    if (!isObject) {
        throw new Error("¡Ocurrió un error!");
    }
    const resultado = {};
    carsSold.forEach(car => {
        resultado[car.make] = resultado[car.make] ? resultado[car.make] + car.price : car.price;
    })
    return resultado;
};

module.exports = { sales };

/*    let totals = new Object;
   const arr = carsSold.map(elem => {
       if (elem.make === elem.make) {
           elem.concat(elem);
       }
       const concatArr = carsSold.concat(arr);
       const newCarsSold = concatArr.reduce((a, b) => a + b.price, 0);
       carsSold.map(news => {
           totals = news.make, news.price;
       });
 
   })
*/
/*  const allCardsSold =  carsSold.forEach(elem => console.log(elem));
if (allCardsSold) {
   allCardsSold.filter(card => card.make);
} */
/*    return Object.keys(carsSold).map((key) => {
       return { make: key, price: carsSold[key] };
     }) */

/* 
     let totals;
const arr = carsSold.map(elem =>  {
if (elem.make === elem.make) {
    totals = elem.reduce((a, b) => a + b);
}
const concatArr = carsSold.concat(arr);
return concatArr.reduce((a, b) => a + b.price,0); */