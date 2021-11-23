document.querySelector("#generate").addEventListener("click", writePassword);

// Assignment Code

var number = function () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
  }

var symbol = function () {
    var symbols = '!"#$%&/()=¡´+}{-.,'
    return symbols[Math.floor(Math.random() * symbols.length)];
  }

var lowercase = function () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  }

var uppercase = function () {
    return String.fromCharCode(Math.floor(Math.random() * 65) + 97);
  }

var confirmLenght = "";
var confirmSymbol;
var confirmNumber;
var confirmUppercase;
var confirmLowercase;


function generatePassword() {
  var confirmLenght = (prompt("How many Variables you want? "));

  while(confirmLenght <= 7 || confirmLenght >= 129) {
    alert("Password lenght must be between 8 to 128 characters please Try Again");
    var confirmLenght = (prompt("How many Variables you want? "));
    }

    
    var confirmSymbol = confirm("Would you like a Symbol(s) on your password?");
    var confirmNumber = confirm("Would you like to have a number(s) on your password?");
    var confirmLowercase = confirm("Would you like your password to have Lower case letters?");
    var confirmUppercase = confirm("Would you like your password to have Upper case letters?");
    
      while(confirmUppercase === false && confirmLowercase === false && confirmSymbol === false && confirmNumber === false) {
        alert("You need to choose at least one option");
        var confirmSymbol = confirm("Would you like a Symbol(s) on your password?");
        var confirmNumber = confirm("Would you like to have a number(s) on your password?");
        var confirmLowercase = confirm("Would you like your password to have Lower case letters?");
        var confirmUppercase = confirm("Would you like your password to have Upper case letters?");
    }
      var passwordvariables = []
      
    if (confirmSymbol) {
      passwordvariables = passwordvariables.concat(symbol())
    }

    if (confirmNumber) {
      passwordvariables = passwordvariables.concat(number())
    }
    if (confirmLowercase) {
      passwordvariables = passwordvariables.concat(lowercase())
    }
    if (confirmUppercase) {
      passwordvariables = passwordvariables.concat(uppercase())
    }

    console.log(passwordvariables)

    var randomPassword = ""

    for (var i = 0; i < confirmLenght; i++) {
      randomPassword = randomPassword + passwordvariables[Math.floor(Math.random() * passwordvariables.length)];
      console.log(randomPassword)
    }
    return randomPassword;
  }
  
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




