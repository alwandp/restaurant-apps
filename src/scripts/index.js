import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', event => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

const getData = () => {
  let restaurantData = "";
  data.restaurants.forEach((restaurant) => {
    restaurantData += `
      <article class="restaurant-card" tabindex="0">
        <header class="restaurant-card__header">
        <img class="restaurant-card__thumbnail" src="${restaurant.pictureId}" alt="restaurant-photo">
          <p>Kota ${restaurant.city}</p>
        </header>
        <div class="restaurant-card__content">
          <p>Rating: ${restaurant.rating}</p>
          <h3 class="restaurant-card__name">${restaurant.name}</h3>
          <p class="restaurant-card__description">${restaurant.description}</p>
        </div>
      </article>
    `;
    document.querySelector('#restaurantList').innerHTML = restaurantData;
  });
}

getData();
