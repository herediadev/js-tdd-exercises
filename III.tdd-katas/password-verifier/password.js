//^                        the start of the string
//(?=.{1,}[a-z])           use positive look ahead to see if at least one lower case letter exists
//(?=.{1,}[A-Z])           use positive look ahead to see if at least one upper case letter exists
//(?=.{1,}[£$%^&*@~])      use positive look ahead to see if at least one underscore or special character exists
//.{8,20}                  gobble up the entire string and match between 8 and 20
//$                        the end of the string

const regex = /^(?=.{1,}[a-z])(?=.{1,}[A-Z])(?=.{1,}([£$%^&*@~])).{8,20}$/;

class Password {
  constructor(password) {
    this.password = password;
    this.isValid = this.isValid();
  }

  // methods
  isValid() {
    return regex.test(this.password);
  }
}

module.exports =  { Password };