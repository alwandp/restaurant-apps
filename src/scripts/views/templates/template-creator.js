import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <img class="restaurant__poster" 
  src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" />
  <h2 class="restaurant__name">${restaurant.name}</h2>
  <div class="restaurant__info">
    <div class="restaurant__info__item">
      <i class="fas fa-map-marker-alt"></i>
      <div>
        <h4>Address</h4>
        <p>${restaurant.address}</p>
      </div>
    </div>
    <div class="restaurant__info__item">
      <i class="fas fa-building"></i>
      <div>
        <h4>City</h4>
        <p>${restaurant.city}</p>
      </div>
    </div>
    <div class="restaurant__info__item">
      <i class="fas fa-star"></i>  
      <div>
        <h4>Rating</h4>
        <p>${restaurant.rating}</p>
      </div>
    </div>
    <div class="restaurant__info__item">
      <i class="fas fa-utensils"></i>
      <div>
        <h4>Category</h4>
        <p>
        ${restaurant.categories.map((category) => `<span class="category">${category.name}</span>`).join(', ')}
        </p>
      </div>
    </div>
  </div>
  <div class="restaurant__description">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <h3 class="restaurant__menu__title">Menu</h3>
  <div class="restaurant__menu">
    <div class="restaurant__menu__item">
      <ul>
      Foods: ${restaurant.menus.foods.map((food, index) => `<li><p>${index + 1}. ${food.name}</p></li>`).join('')}
      </ul>
    </div>
    <div class="restaurant__menu__item">
      <ul>
      Drinks: ${restaurant.menus.drinks.map((drink, index) => `<li><p>${index + 1}. ${drink.name}</p></li>`).join('')}
      </ul>
    </div>
  </div>
  <div class="restaurant__review">
    <h3>Review</h3>
    <div class="restaurant__review-item">
      ${restaurant.customerReviews.map((review) => `
        <div class="restaurant__review-item__detail">
          <div class="restaurant__review-item__detail__header">
            <h4>${review.name}</h4>
            <p>${review.date}</p>
          </div>
          <div class="restaurant__review-item__detail__body">
            <p>${review.review}</p>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item__header">
        <img class="restaurant-item__header__poster lazyload" alt="${restaurant.name}"
            data-src="${restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + restaurant.pictureId : 'https://picsum.photos/id/666/800/450?grayscale'}">
        <div class="restaurant-item__header__rating">
            <p>⭐️<span class="restaurant-item__header__rating__score">
            ${restaurant.rating}</span></p>
        </div>
    </div>
    <div class="restaurant-item__content">
        <h3 class="restaurant__name"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name || '-'}</a></h3>
        <p>${restaurant.description || '-'}</p>
    </div>
  </div>
  `;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
