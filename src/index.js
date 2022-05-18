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
 
  header.innerHTML = Header();
  search.innerHTML = Search();


  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    getCityName(searchInput.value);
  });
  
}

async function getCityName (cityName) {
  const card = await Main(cityName);
  if(card !== false) {
    mainContent.insertAdjacentHTML('beforeend', `${card}`);
    searchInput.value = "";
    searchInput.setAttribute('placeholder', "Search for a city");
  } else {
    searchInput.setAttribute('placeholder', "City not found");
    searchInput.value = "";
  }

}

function removeCard () {
  console.log(mainContent.childNodes)
}
removeCard()


