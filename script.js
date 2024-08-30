let displayResult = document.getElementById("display")
const button = document.querySelectorAll(".num-btn")


button.forEach((item) => {
    item.addEventListener("click", (key) => {
        displayResult.value += key.currentTarget.value
    })
})

function clearAll() {
    displayResult.value = ""
}

function getResult() {
    try {
        displayResult.value = eval(displayResult.value)
    }
    catch (error) {
        displayResult.value = "Error"
    }
}

document.getElementById("clear").addEventListener("click", clearAll)
document.getElementById("result").addEventListener("click", getResult)