function generatePasswordFunction(passLength, upper, lower, number, symbol) {
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numberCase = "0123456789";
    const symbolCase = "!@#$%^&*()_+|}{?><~";

    let useCases = "";

    if (upper) useCases += upperCase;
    if (lower) useCases += lowerCase;
    if (number) useCases += numberCase;
    if (symbol) useCases += symbolCase;

    if (useCases.length === 0) return "Select at least one option";

    let password = "";

    for (let i = 0; i < passLength; i++) {
        password += useCases[Math.floor(Math.random() * useCases.length)];
    }

    return password;
}

document.querySelector(".generateButton").addEventListener("click", function() {
    const passLength = document.querySelector("#number").value;
    const upper = document.querySelector("#check1").checked;
    const lower = document.querySelector("#check2").checked;
    const number = document.querySelector("#check3").checked;
    const symbol = document.querySelector("#check4").checked;

    if (isNaN(passLength) || passLength <= 0) {
        document.querySelector(".PassArea").value = "Enter a valid length";
        return;
    }

    const password = generatePasswordFunction(passLength, upper, lower, number, symbol);
    document.querySelector("#PassArea").value = password;
});

const copyIcon = document.querySelector(".fa-solid");
const field = document.querySelector("#PassArea");


copyIcon.addEventListener("click", function(){
    field.select();
    document.execCommand("Copy");
    alert("Copied");
});

console.log(generatePasswordFunction(12,true, true, true, true));