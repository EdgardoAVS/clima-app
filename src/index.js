import './styles/main.css';
import { Header } from './templates/Header';
import { Search } from './templates/Search';
import { Main } from './templates/Main';


function App () {
  
  const header = document.querySelector('#header');
  const search = document.querySelector('#search');
  const mainContent = document.querySelector('#main-content');
 
  header.innerHTML = Header();
  search.innerHTML = Search();



  const form = document.querySelector('.form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const searchInput = document.querySelector('.search-input');
    const city = searchInput.value;

    mainContent.insertAdjacentHTML('beforeend', `${await Main(city)}` );
    searchInput.value = ""
  })

}

App();
