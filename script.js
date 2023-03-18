let result = "";



function addInput(numbers) {
    result = result + numbers
    document.getElementById("output").innerHTML = result
}

function calculate() {
    document.getElementById("output").innerHTML = eval(result)
}

function erase() {
    result = ""
    document.getElementById("output").innerHTML = result
}