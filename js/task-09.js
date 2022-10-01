 function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
 }
  
const bodyRef = document.querySelector('body') 
const btnRef = document.querySelector('.change-color')
const spanRef = document.querySelector('.color')

btnRef.addEventListener('click', changeColor)

function changeColor() {
  const color = getRandomHexColor();
  bodyRef.style.backgroundColor = color;
  spanRef.textContent = color;
}




