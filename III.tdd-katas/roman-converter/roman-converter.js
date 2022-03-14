const convertToOldRoman = (number) => {
    let romanNumber = "";
    
    if(number >= 10){
        romanNumber = "X".repeat(number/10);
    }

    if(number >= 30){   
        return romanNumber + "I".repeat(number -30)
    }
    if(number >= 25){
        let mNumbers = "XXV"
        return mNumbers + "I".repeat(number -25)
    }
    if(number >= 20){
        return romanNumber + "I".repeat(number -20)
    }
    if(number >= 15){
        let lNumbers = "XV";
        return lNumbers + "I".repeat(number -15);
    }
    if(number >= 10){
        return romanNumber + "I".repeat(number -10);
    }
    if(number >= 5){
        let jNumbers = "V";
        return jNumbers + "I".repeat(number -5);
    }
    
    
    return romanNumber + "I".repeat(number);  
}

module.exports = {
    convertToOldRoman
}