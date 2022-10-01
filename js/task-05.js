const inputRef = document.querySelector('#name-input')
const outputRef = document.querySelector('#name-output')


inputRef.addEventListener('input', (event) => {
if (event.currentTarget.value === "") {
    return outputRef.textContent = "Anonymous"
}
    outputRef.textContent = event.currentTarget.value
})

