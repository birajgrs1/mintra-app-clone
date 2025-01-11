/*
let item = {
  item_image: "./images/1.jpg",
  rating: {
    stars: 4.5,
    noOfReviews: 1400,
  },
  company_name: "Carlton London",
  item_name: "Rhodium-Plated CZ Floral Studs",
  currentPrice: 610,
  originalPrice: 1045,
  discountPercentage: 42,
};
*/

// let bagItems = [];
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem("bagItems");
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  if (!bagItems.includes(itemId)) {
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
  }
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}


function displayItemsOnHomePage() {
  let itemsContainerElement = document.querySelector('.items-container');
  if (!itemsContainerElement) {
    return;
  }
  let innerHtml = '';
  items.forEach(item => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="add-to-bag" onclick="addToBag(${item.id})">Add to Bag</button>
    </div>`
  });
  itemsContainerElement.innerHTML = innerHtml;
}