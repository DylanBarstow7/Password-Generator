// Assignment Code
var generateBtn = document.querySelector("#generate");
var specialCharacters = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "-","+", ".", "/", ":", ";", "<", "=",">", "?"]
var lowerCase = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numeric = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() 
  var possibleCharacters = []
  var input = false
  var length = prompt("Choose a password length between 8 and 128 characters.");
  while(length < 8 || length > 128){
    alert("Password length must be between 8 and 128 characters.");
    length = prompt("Choose a password length between 8 and 128 characters.");
  }
  var lowerCase = prompt("Do you want lowercase letters in your password? Type: Yes or No");
  while (input === false){
    if (lowerCase === "Yes" || lowerCase === "No"){
      input = true
    }
    else{
      alert("Please Type: Yes or No");
      lowerCase = prompt("Do you want lowercase letters in your password? Type: Yes or No");
    }
  }
  input = false
  var upperCase = prompt("Do you want uppercase letters in your password? Type: Yes or No");
    while (input === false){
      if (upperCase === "Yes" || upperCase === "No"){
        input = true
      }
      else{
        alert("Please Type: Yes or No");
        upperCase = prompt("Do you want uppercase letters in your password? Type: Yes or No")
    }
  }
  input = false

  
    
    function getRandomIntInclusive(min,max){
  min = math.ceil(min);
  max = math.floor(max);
  return math.floor(Math.random() * (max - min + 1) + min);

}

function getRandomItems(arr){
  return arr [getRandomIntInclusive(0, arr.length - 1)]


  console.log(specialCharacters[getRandomIntInclusive(0, specialCharacters.length - 1)]);

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);