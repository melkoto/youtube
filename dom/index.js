// DOM

const secondNameDiv = document.createElement('div')
secondNameDiv.className = 'second-name'

const secondNameLabel = document.createElement('label')
secondNameLabel.innerText = 'Second name: '

const secondNameInput = document.createElement('input')
secondNameInput.id = 'second-name-id'
secondNameInput.name = "second-name-name"
secondNameInput.placeholder = 'This is second name'
secondNameInput.type = 'text'

secondNameLabel.append(secondNameInput)
secondNameDiv.append(secondNameLabel)

// main.append(secondNameDiv)
const name = document.querySelector('.name')
name.insertAdjacentElement('afterend', secondNameDiv)
console.log(name.className)
console.log(name.dataset.name)

name.classList.remove('name1')
name.classList.add('name2')


const main = document.querySelector('.main')
main.addEventListener('mouseover', () => {
  const s = main.querySelectorAll('input')

  s.forEach(elem => {
    elem.style.fontSize = '20px'
  })
})

main.addEventListener('mouseleave', mouseLeave)

function mouseLeave() {
  const s = main.querySelectorAll('input')

  s.forEach(elem => {
    elem.style.fontSize = '14px'
  })
}

main.addEventListener('click', () => {
  console.log('CLICKED')
})













