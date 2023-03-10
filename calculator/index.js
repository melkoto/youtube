// const container = document.createElement('div')
// container.className = "container"
// document.body.append(container)
//
// const h1 = document.createElement('h1')
// h1.innerText = "Calculator"
// container.append(h1)
//
// const error = document.createElement('div')
// error.className = 'error'
// error.innerText = 'Input number'
// container.append(error)
//
// const input = document.createElement('input')
// input.type = 'text'
// input.className = 'input'
// container.append(input)
//
// const buttons = document.createElement('div')
// buttons.className = 'buttons'
// container.append(buttons)
//
// const mathOperations = document.createElement('div')
// mathOperations.className = 'math-operations'
// buttons.append(mathOperations)
//
// const addition = document.createElement('button')
// addition.classList.add('math-operation', 'addition')
// addition.innerText = '+'
// mathOperations.append(addition)
//
// const subtraction = document.createElement('button')
// subtraction.classList.add('math-operation', 'subtraction')
// subtraction.innerText = '-'
// mathOperations.append(subtraction)
//
// const division = document.createElement('button')
// division.classList.add('math-operation', 'division')
// division.innerText = '/'
// mathOperations.append(division)
//
//
// const multiplication = document.createElement('button')
// multiplication.classList.add('math-operation', 'multiplication')
// multiplication.innerText = 'x'
// mathOperations.append(multiplication)
//
// const result = document.createElement('button')
// result.className = 'result'
// result.innerText = '='
// buttons.append(result)
//
// const history = document.createElement('div')
// history.className = 'history'
// container.append(history)
//
// const h2 = document.createElement('h2')
// h2.innerText = 'History'
// history.append(h2)
//
// const calculation = document.createElement('div')
// calculation.className = 'calculation'
// calculation.innerText = '1 + 2 = 3'
// history.append(calculation)


const input = document.querySelector('.input')
input.addEventListener('keydown', getInput)

const error = document.querySelector('.error')
const history = document.querySelector('.history')

const allMathOperations = document.querySelectorAll('.math-operation')
allMathOperations.forEach(button => {
    button.addEventListener('click', getMathOperation)
})

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

    if (!first) return;
    firstNumber = Number(first)

    switch (currBtn.innerText) {
        case '+':
            first += ' +'
            break
        case '-':
            first += ' -'
            break
        case 'x':
            first += ' x'
            break
        case '/':
            first += ' /'
            break
    }

    const calculation = document.createElement('div')
    calculation.className = 'calculation'
    calculation.innerText = first
    history.append(calculation)

    input.value = ''
    input.focus()
}

function getResult(event) {
    event.preventDefault()
    if (!firstNumber) return

    const mathOperations = document.querySelectorAll('.math-operation')
    mathOperations.forEach(button => {
        button.classList.remove('current-operation')
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
    input.value =""
    input.focus()
    firstNumber = null

}

function isNumeric(keyboardEvent) {
    const charCode = keyboardEvent.keyCode
    return charCode > 47 && charCode < 58
}

function showError() {
    error.style.display = 'block'

    setTimeout(() => {
        error.style.display = 'none'
    }, 1000)
}

window.addEventListener('beforeunload', () => {
    input.removeEventListener('keydown', getInput)

    allMathOperations.forEach(button => {
        button.removeEventListener('click', getMathOperation)
    })

    result.removeEventListener('click', getResult)
})





























