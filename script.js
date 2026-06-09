let passwordEl = document.getElementById("password");
let generateBtn = document.querySelector(".generate");
let copyIconBtn = document.querySelector(".copy-icon");
let copyMessage = document.querySelector(".copy-message");

let numbers = "0123456789";
let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
let uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let symbols = "!@#$%^&*()";

generateBtn.addEventListener("click", function () {
    let chars = "";

    if (document.getElementById("numbers").checked) {
        chars += numbers;
    }
    if (document.getElementById("lowercase").checked) {
        chars += lowercaseLetters;
    }
    if (document.getElementById("uppercase").checked) {
        chars += uppercaseLetters;
    }
    if (document.getElementById("symbols").checked) {
        chars += symbols;
    }
    if (!chars) {
        alert("Please select at least one character type.");
        return;
    }

    let passwordLength = document.getElementById("length").value;
    let password = "";

    for (let i = 0; i < passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }
    passwordEl.value = password;
    console.log(password);
});

copyIconBtn.addEventListener("click", function () {
    // passwordEl.select();
    // passwordEl.setSelectionRange(0, 99999);
    if (passwordEl.value) {
        navigator.clipboard.writeText(passwordEl.value);
        copyMessage.classList.add("show");
        setTimeout(() => {
            copyMessage.classList.remove("show");
        }, 2000);
    }
});