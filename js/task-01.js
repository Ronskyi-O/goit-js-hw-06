const liEl = document.querySelectorAll('.item')
const amountOfLi = liEl.length
console.log('Number of categories: ', amountOfLi);

const allh2El = document.querySelectorAll('h2')
for (const h2 of allh2El) {
    const headingText = h2.textContent;
    console.log('Category: ', headingText);

    const siblingOfHeading = h2.nextElementSibling
    const allItems = siblingOfHeading.querySelectorAll('li');
    const amountOfItems = allItems.length
    console.log('Elements: ', amountOfItems);
}



