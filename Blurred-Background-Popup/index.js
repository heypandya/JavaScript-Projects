const containerElement = document.querySelector('.container');
const popupContainerElement = document.querySelector('.popup-container');
const btnElement = document.querySelector(".btn");

const closeIconElement = document.querySelector('.close-icon');

btnElement.addEventListener('click', () => {
  containerElement.classList.add('active');
  popupContainerElement.classList.remove('active');
});

closeIconElement.addEventListener('click', ()=>{
  containerElement.classList.remove('active');
  popupContainerElement.classList.add('active');
})