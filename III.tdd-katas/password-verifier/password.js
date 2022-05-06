//^                        the start of the string
//(?=.{1,}[a-z])           use positive look ahead to see if at least one lower case letter exists
//(?=.{1,}[A-Z])           use positive look ahead to see if at least one upper case letter exists
//(?=.{1,}[£$%^&*@~])      use positive look ahead to see if at least one underscore or special character exists
//.{8,20}                  gobble up the entire string and match between 8 and 20
//$                        the end of the string

// const regex = /^(?=.{1,}[a-z])(?=.{1,}[A-Z])(?=.{1,}([£$%^&*@~])).{8,20}$/;
class Password {
  constructor(password) {
    this.password = password;
    this.isValid = this.isValid();
  }
  // methods
  isValid() {    
    if (typeof this.password !== 'string') return false;
    if (this.password.length <= 0) return false; 

    const regexMin1LowerCase = /^(?=.{1,}[a-z])/;
    const regexMin1UpperCase = /^(?=.{1,}[A-Z])/;
    const regexContainSpecialCharacter = /^(?=.{1,}[£$%^&*@~])/;
    const regexMin8Max20 = /.{8,20}$/;

    const conditions = [
      regexMin1UpperCase,
      regexMin1LowerCase,
      regexContainSpecialCharacter,
      regexMin8Max20,
    ];
   
    const min3Conditions = (password) => {
      let count = 0;

      conditions.forEach(condition => {
        if (condition.test(password)) {
          count++;
        }
      })
      
      return count >= 3;
    }
    
    if (!regexMin1LowerCase.test(this.password)) return false;
    if(!min3Conditions(this.password)) return false;

    return true;
  }
}

module.exports =  { Password };