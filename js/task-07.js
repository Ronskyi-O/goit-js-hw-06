const controllerRef = document.querySelector('#font-size-control')
const textRef = document.querySelector('#text')


controllerRef.addEventListener("input", (event) => {
    const inputCurrentValue = event.currentTarget.value
    textRef.style.fontSize = `${inputCurrentValue}px`;
})




