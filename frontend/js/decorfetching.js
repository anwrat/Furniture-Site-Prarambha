document.addEventListener("DOMContentLoaded", () => {
  fetch("http://localhost:3000/api/decors/fetchall") 
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("decor-container");
      container.innerHTML = ""; 

      data.forEach(decor => {
        const box = document.createElement("div");
        box.className = "box";
        box.innerHTML = `
          <div class="left">
            <img src="${decor.image}">
          </div>
          <div class="right">
            <h2>${decor.name}</h2>
            <h>Description</h>
            <p>${decor.description}</p>
          </div>
          <div class="button">
            <span>Rs ${decor.price}</span>
            <button>Buy</button>
          </div>
        `;
        container.appendChild(box);
      });
    })
    .catch(err => {
      console.error("Failed to load decor items", err);
    });
});