```HTML
<div class="container">
    <h1>Calculator</h1>

    <div class="error">Введите число</div>
    <input type="text" class="input">

    <div class="buttons">
        <div class="math-operations">
            <button class="math-operation addition">+</button>
            <button class="math-operation subtraction">-</button>
            <button class="math-operation division">/</button>
            <button class="math-operation multiplication">x</button>
        </div>
        <button class="result">=</button>
    </div>

    <div class="history">
        <h2>History</h2>
        <div class="calculation">1 + 2 = 3</div>
    </div>
</div>
```
const error = document.querySelector('.error')
const input = document.querySelector('.input')
const result = document.querySelector('.result')
const history = document.querySelector('.history')

let hasInput = false

let firstNumber

const allMathOperations = document.querySelectorAll('.math-operation')

allMathOperations.forEach(mathOperation => {
    mathOperation.addEventListener('click', getMathOperation)
})

input.addEventListener('keydown', getInput)

result.addEventListener('click', getResult)

function getInput(event) {

    if (event) {
        if (!isNumeric(event)) {
            event.preventDefault()
            input.value = ""
            showError()
            return
        }
    }

    return input.value
}

function getMathOperation(event) {
    event.preventDefault()

    if (!input.value) {
        showError()
        return
    }

    const currBtn = event.target
    currBtn.classList.add('current-operation')

    let first = getInput()

    if (!first) return

    firstNumber = Number(first)

    switch (event.target.innerText) {
        case '+':
            first += ' +'
            break
        case '-':
            first += ' -'
            break
        case '/':
            first += ' /'
            break
        case 'x':
            first += ' x'
    }

    const div = document.createElement('div')
    div.className = 'calculation'
    div.innerText = first
    history.append(div)

    input.value = ""
    hasInput = true

    input.focus()
}

function getResult() {
    if (!hasInput || !firstNumber) return
    hasInput = false

    const mathOperations = document.querySelectorAll('.math-operation')
    mathOperations.forEach(op => {
        op.classList.remove('current-operation')
    })

    const calculations = document.querySelectorAll('.calculation')
    const lastCalculation = calculations[calculations.length - 1]
    let calculation = lastCalculation.innerText

    const operation = calculation[calculation.length - 1]

    calculation += ` ${input.value} = `

    const second = Number(input.value)

    switch (operation) {
        case '+':
            calculation += firstNumber + second
            break
        case '-':
            calculation += firstNumber - second
            break
        case '/':
            calculation += firstNumber / second
            break
        case 'x':
            calculation += firstNumber * second
            break
    }

    lastCalculation.innerText = calculation
    input.value = ""
    firstNumber = null
    input.focus()
}

function showError() {
    error.style.display = 'block'

    setTimeout(() => {
        error.style.display = 'none'
    }, 1000)
}

function isNumeric(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));

}

window.addEventListener("beforeunload", () => {
    input.removeEventListener('keydown', getInput)

    allMathOperations.forEach(operation => {
        operation.removeEventListener('click', getMathOperation)
    })

    result.removeEventListener('click', getResult)
});
