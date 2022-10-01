const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener("blur", inputChecker)

function inputChecker(event) {
   const inputLength = event.currentTarget.value.length
    const correctValueLength = inputRef.dataset.length

    if (inputLength == correctValueLength) {
       return inputRef.classList.add('valid');
    }
    inputRef.classList.add('invalid')
}

inputRef.addEventListener("focus", (event) => {
    inputRef.classList.remove('invalid', 'valid')
})