
function increment() {
    var numbers = document.getElementsByClassName("number");
    var integernum = parseInt(numbers[0].innerHTML)
    if (integernum < 9) {
        numbers[0].textContent = integernum + 1;
    }
}

function decrement() {
    var numbers = document.getElementsByClassName("number");
    var integernum = parseInt(numbers[0].innerHTML)
    if (integernum > 1) {
        numbers[0].textContent = integernum - 1;
    }
}

