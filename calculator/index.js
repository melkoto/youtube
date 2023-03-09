const error = document.querySelector('.error')
const history = document.querySelector('.history')

const allMathOperations = document.querySelectorAll('.math-operation')
allMathOperations.forEach(mathOperation => {
    mathOperation.addEventListener('click', getMathOperation)
})

const input = document.querySelector('.input')
input.addEventListener('keydown', getInput)

const result = document.querySelector('.result')
result.addEventListener('click', getResult)

let firstNumber

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
    input.focus()
}

function getResult() {
    if (!firstNumber) return

    const mathOperations = document.querySelectorAll('.math-operation')
    mathOperations.forEach(op => {
        op.classList.remove('current-operation')
    })

    const calculations = document.querySelectorAll('.calculation')
    const lastCalculation = calculations[calculations.length - 1]
    let calculation = lastCalculation.innerText

    const operation = calculation[calculation.length - 1]

    if (!input.value) {
        lastCalculation.remove()
        showError()
        firstNumber = null
        input.focus()
        return
    }

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

function isNumeric(keyboardEvent) {
    const charCode = keyboardEvent.keyCode
    return charCode > 47 && charCode < 58
}

window.addEventListener("beforeunload", () => {
    input.removeEventListener('keydown', getInput)
    allMathOperations.forEach(operation => {
        operation.removeEventListener('click', getMathOperation)
    })
    result.removeEventListener('click', getResult)
});
