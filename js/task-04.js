const btnDecrementRef = document.querySelector('button[data-action="decrement"]');
const btnIncrementRef = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector('#value')
let counterValue = 0


btnDecrementRef.addEventListener("click", () => {
    counterValue -= 1;
    spanValue.textContent = counterValue
})

btnIncrementRef.addEventListener("click", () => {
counterValue += 1;
    spanValue.textContent = counterValue
})


