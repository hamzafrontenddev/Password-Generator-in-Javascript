const passwordBox = document.getElementById("passwordBox");
const leangth = 18;     //  <====   password leangth

const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const symbols = "<>;'=+-?~`,.:)(*&^%$#@!";
const number = "0123456789";
const symbol = "!@#$%^&*():.,`~?-+=';><";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";




const allChars = lowerCase + symbols + number + symbol + upperCase;


function createPassword () {
    let password = "";
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    password += number[Math.floor(Math.random() *number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += upperCase[Math.floor(Math.random() * upperCase.length)];


    while (leangth > password.length){
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
}

function copyPassword() {
    const passwordBox = document.getElementById("passwordBox");
    passwordBox.select();
    document.execCommand("copy");
}