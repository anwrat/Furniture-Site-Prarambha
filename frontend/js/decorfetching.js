document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("decor-container");

  function renderDecors(data) {
    container.innerHTML = "";
    data.forEach(decor => {
      const box = document.createElement("div");
      box.className = "box";
      box.innerHTML = `
        <div class="left">
          <img src="${decor.image}" alt="${decor.name}">
        </div>
        <div class="right">
          <h2>${decor.name}</h2>
          <h>Description</h>
          <p>${decor.description}</p>
        </div>
        <div class="button">
          <span>Rs ${decor.price}</span>
          <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
      container.appendChild(box);
      const addToCartBtn = box.querySelector(".add-to-cart");
      addToCartBtn.addEventListener("click", () => {
        addToCart(decor);
      });
    });
  }

function addToCart(decor) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(item => item.id === decor.id);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ ...decor, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${decor.name} added to cart!`);
}



  // Initial fetch
  fetch("http://localhost:3000/api/decors/fetchall")
    .then(res => res.json())
    .then(renderDecors)
    .catch(err => console.error("Failed to load decor items", err));

  // Sorting button
  const sortButton = document.getElementById("sort-low-high");
  sortButton.addEventListener("click", () => {
    fetch("http://localhost:3000/api/decors/sort/asc")
      .then(res => res.json())
      .then(renderDecors)
      .catch(err => console.error("Failed to sort by price", err));
  });

  //Filtering by max price
  const filterButton = document.getElementById("filter-price");
  filterButton.addEventListener("click", () => {
    const maxPrice = document.getElementById("max-price").value;
    if (!maxPrice) return;

    fetch(`http://localhost:3000/api/decors/filter/price/${maxPrice}`)
      .then(res => res.json())
      .then(renderDecors)
      .catch(err => console.error("Failed to filter by price", err));
  });
});
