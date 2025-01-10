let itemsContainerElement = document.querySelector(".items-container");

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

let bagItems = [];
displayItemsOnHomePage();

function addToBag(itemId) {
  bagItems.push(itemId);
  // console.log(`${itemId} object clicked.`);
}

function displayItemsOnHomePage() {
  let innerHTML = "";
  items.forEach((item) => {
    innerHTML += `

        <div class="item-container">
          <img class="item-img" src="${item.image}" alt="image not found">
          <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
          </div>
          <div class="company-name">
          ${item.company}
          </div>
          <div class="item-name">
            ${item.item_name}
          </div>

          <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price"> Rs ${item.original_price}</span>
            <span class="discount"> (${item.discount_percentage}% off)</span>
          </div>
          <button class="add-to-bag" onClick = 'addToBag(${item.id})'>Add to Bag</button>
        </div>
   
    `;
  });

  itemsContainerElement.innerHTML = innerHTML;
}
