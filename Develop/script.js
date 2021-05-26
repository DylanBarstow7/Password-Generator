// Assignment Code

// created variables for each special character
var generateBtn = document.querySelector("#generate");
var specialCharacterArray = ["!", "@", "#", "$", "%", "&", "*", "(", ")", "_", "-","+", ".", "/", ":", ";", "<", "=",">", "?"]
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// This code generates our password criteria, creating four pop up Yes or No questions that determine what characters will be generated in the password.
function generatePassword() {
  var possibleCharacters = []
  var input = false
  // question 1: how many characters?
  var width = prompt("Choose a password length between 8 and 128 characters.");
  // must be between 8 and 128 characters
  while (width < 8 || width > 128){
    // if not within range, this alert pops up
    alert("Password length must be between 8 and 128 characters.");
    // prompting this question to be resent.
    width = prompt("Choose a password length between 8 and 128 characters.");
  }
  // this process is continued for the rest of the character types
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
        upperCase = prompt("Do you want uppercase letters in your password? Type: Yes or No");
    }
  }
  input = false
  var numeric = prompt("Do you want numeric values in your password? Type: Yes or No");
    while (input === false){
      if (numeric === "Yes" || numeric === "No"){
        input = true
      }
      else{
        alert("Please Type: Yes or No");
        numeric = prompt("Do you want numeric values in your password? Type: Yes or No");
    }
  }
  input = false
  var specialCharacters = prompt("Do you want special characters in your password? Type: Yes or No");
  while (input === false){
    if (specialCharacters === "Yes" || specialCharacters === "No"){
      input = true
    }
    else{
      alert("Please Type: Yes or No");
      specialCharacters = prompt("Do you want special characters in your password? Type: Yes or No")
    }
  }


// Here we determine what happens when Yes is chosen in the previous step.  In this case it pushes the lowercase array into the mix.
if (lowerCase == "Yes"){
  for(var i = 0; i < lowerCaseArray.length; i++){
    possibleCharacters.push(lowerCaseArray[i])
  }
}

// Pushes the upperCaseArray into the mix.
if (upperCase == "Yes"){
  for(var i = 0; i < upperCaseArray.length; i++){
    possibleCharacters.push(upperCaseArray[i])
  }
}

// Pushes the numericArray into the mix.
if (numeric == "Yes"){
  for(var i = 0; i < numericArray.length; i++){
    possibleCharacters.push(numericArray[i])
  }
}

// Pushes the specialCharacterArray into the mix.
if (specialCharacters == "Yes"){
  for(var i = 0; i < specialCharacterArray.length; i++){
    possibleCharacters.push(specialCharacterArray[i])
  }
}
// This formula creates a new variable which searches the chosen "possibleCharacters" named criteria
var criteria = "";
// This line ensures we dont go over the maximum length
var max = possibleCharacters.length;
// This ensures we done go over the given number of digits for the password
for(var i =0; i < width; i++){
// This line begins our randomization to choose which array to pull from
  var pick = Math.floor(Math.random()*max - 0 +1) +0;
// New variable chosen with the randomizer
  var choice = possibleCharacters[pick];
// Adding the Randomized option to the "Blank" criteria
  criteria = criteria + choice;
}


debugger;
console.log(criteria)
return criteria;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);