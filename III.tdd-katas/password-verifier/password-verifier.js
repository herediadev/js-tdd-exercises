  class PasswordVerifier {
    constructor(password){
        this.password = password;   
    }

    isLengthGratherThan(limit){
        const message = "La password no puede contener menos de 8 caracteres";
        if(this.password.length < limit){
            throw new Error(message)
        }
       
    }
  }

  module.exports = PasswordVerifier;
  
  