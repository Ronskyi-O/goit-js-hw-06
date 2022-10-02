const inputRef = document.querySelector('input')
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const divRef = document.querySelector('#boxes')


btnCreate.addEventListener('click', createBoxes)
btnDestroy.addEventListener('click', destroyBoxes)


function createBoxes() {
  const amount = inputRef.value
  let size = 30
  for (let i = 0; i < amount; i++) {
    const newDiv = document.createElement('div');
    const color = getRandomHexColor()
  size += 10
  newDiv.style.width = `${size}px`
  newDiv.style.height = `${size}px`
  newDiv.style.backgroundColor = color
  divRef.append(newDiv)
  }
}

function destroyBoxes() {
  divRef.innerHTML = ""
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


