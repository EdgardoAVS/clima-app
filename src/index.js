import './styles/main.css';
import { Header } from './templates/Header';
import { Search } from './templates/Search';
import { Main } from './templates/Main';

App();

const mainContent = document.querySelector('#main-content');
const searchInput = document.querySelector('.search-input');

function App () {
  
  const header = document.querySelector('#header');
  const search = document.querySelector('#search');
 
  header.insertAdjacentHTML('afterbegin', Header())
  search.innerHTML = Search();


  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    getCityName(searchInput.value);
  });
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', () => {

    const menu = document.querySelector('.menu');
    const menuOpen = document.querySelector('.menu-open');
    const menuClose = document.querySelector('.menu-close')
    if(menu.style.display === "none") {
      menuOpen.style.display = "none";
      menuClose.style.display = "block";
      menu.style.display = "block";
    } else {
      menuOpen.style.display = "block";
      menuClose.style.display = "none";
      menu.style.display = "none";
    }
  })
}

async function getCityName (cityName) {
  const card = await Main(cityName);
  if(card !== false) {
    mainContent.insertAdjacentHTML('beforeend', `${card}`);
    searchInput.value = "";
    searchInput.setAttribute('placeholder', "Search for a city");
    removeCard();
  } else {
    searchInput.setAttribute('placeholder', "City not found");
    searchInput.value = "";
  }
}

function removeCard () {
  const newContainer = document.querySelector('.main-content').children;
  for(let card of newContainer) {  
      const selectCard = card.querySelector('.remove')
      selectCard.addEventListener('click', () => card.remove())
  }
}

