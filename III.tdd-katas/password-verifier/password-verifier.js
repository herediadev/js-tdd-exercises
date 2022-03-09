  class PasswordVerifier {
    constructor(password){
        this.password = password;   
    }

    isLengthGratherThan(limit){
        const message = "The password cannot contain less than 8 characters";
        if(this.password.length < limit){
            throw new Error(message)
        }
       
    }

    isNotNull(){
        if(this.password === null){
            throw new Error("The password cannot be null")
        }
        return true;
    }

    isNotContainToUppercase(){
        if(this.password.match(/[A-Z]/g) === null){
            throw new Error("The password should be contain at least one uppercase")
        }
    }

    isNotContainToLowercase(){
        if(this.password.match(/[a-z]/g) === null){
            throw new Error("The password should be contain at least one lowercase")
        }
    }

    isNotContainNumber(){
        if(this.password.match(/\d+/g) === null){
            throw new Error("The password should be contain at least one number")
        }
    }

    

      
  }

  module.exports = PasswordVerifier;
  
  