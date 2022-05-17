import { getData } from '../utils/getData';

const Main = async (city) => {

  const data = await getData(city);
  let temperature = Math.round(data.main.temp - 273.15);
  const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  const view = `
    <article class="card">
      <span class="remove active">x</span>
      <h2 class="city">${data.name}<span class="country">${data.sys.country}</span></h2>
      <p class="temperature">${temperature}<span class='degrees'>°C</span></p>
      <img class="weather" src="${iconURL}" alt="${data.name}">
      <p class="weather-description">${data.weather[0].description}</p>
    </article>
  `;
  return view;
}

export { Main };