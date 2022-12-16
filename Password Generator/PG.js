
const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "1234567890"
const specialSet = "!@#$%^&*()-_+/\|;:<>"

const passBox = document.getElementById("result")
const passLength = document.getElementById("length")
const upperInput = document.getElementById("uppercase")
const lowerInput = document.getElementById("lowercase")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (Data) => {

    return Data[Math.floor(Math.random() * Data.length)]
}

const generatePassword = (pass = "") => {

    if (upperInput.checked) {
        pass += getRandomData(upperSet)
    }
    if (lowerInput.checked) {
        pass += getRandomData(lowerSet)
    }
    if (numberInput.checked) {
        pass += getRandomData(numberSet)
    }
    if (symbolInput.checked) {
        pass += getRandomData(specialSet)
    }

    if (pass.length < passLength.value) {
        return generatePassword(pass)
    }

    passBox.innerText = truncString(pass, passLength.value)
}

document.getElementById("generate").addEventListener("click", function () {

    generatePassword();

})

function truncString(str, num) {

    if (str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    }
    else {
        return str;
    }
}

// clipboard

clipboard.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = passBox.innerText;

    if (!password) {
        return;
    }

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    succ()
})

// success copied 

function succ() {
    const alertsuc = document.getElementById("alertbox")

    alertsuc.classList.remove("dis")

    setTimeout(function () {
        alertsuc.classList.add("dis")
    }, 2000);
}

// remove div 

const close = document.getElementsByClassName("closebtn")


for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function () { div.style.display = "none"; }, 500);
    }
} 