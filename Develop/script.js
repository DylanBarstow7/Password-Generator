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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// create an array
function generatePassword = []{
 var options
 var password = [console.log(math.random())];
 var possibleCharacters = [];
 var guaranteedCharacters = [];
}

function getRandomIntInclusive(min,max){
  min = math.ceil(min);
  max = math.floor(max);
  return math.floor(Math.random() * (max - min + 1) + min);

}

function getRandomItems(arr){
  return arr [getRandomIntInclusive(0, arr.length - 1)]


  console.log(specialCharacters[getRandomIntInclusive(0, specialCharacters.length - 1)]);

}

