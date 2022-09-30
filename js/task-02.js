const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingridient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingridient;
  liEl.classList.add('item');
  return liEl
})

const ingridientsList = document.querySelector('#ingredients')

ingridientsList.append(...elements)



