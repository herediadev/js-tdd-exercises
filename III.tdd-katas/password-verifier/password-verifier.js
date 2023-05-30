  class PasswordVerifier {
    constructor(password){
        this.password = password;
        this.errores = [];   
    }
    verify(){
        let acumulador = 2;

        try {
            this.isNotNull();
            this.isNotContainToLowercase();
            try {
                this.isLengthGratherThan(8);
                acumulador++
            } catch (error) {
                this.errores.push(error.message)
            }
            try {
                this.isNotContainToUppercase();
                acumulador++
            } catch (error) {
                this.errores.push(error.message)
            }
            try {
                this.isNotContainNumber();
                acumulador++
            } catch (error) {
                this.errores.push(error.message)
            }
            if(acumulador >= 3){
                return "OK"
            }else {
                return "Not OK"
            }
        } catch (error) {
            return "Not OK"
        }
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
   