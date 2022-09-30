const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const makeGalleryImgMarkup = ({url, alt}) => {
  return `<li><img src="${url}" alt="${alt}" width="500px" height="300px"/></li>`
}

const makeGallery = images.map(makeGalleryImgMarkup).join(' ')
const imgListContainer = document.querySelector('.gallery')

imgListContainer.insertAdjacentHTML("afterbegin", makeGallery)
const allLiEl = document.querySelectorAll('li')

for (const liEl of allLiEl) {
  liEl.style.listStyleType = "none"
};

imgListContainer.style.cssText = `
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;`






