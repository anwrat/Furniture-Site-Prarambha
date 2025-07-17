  const menuBtn = document.querySelector(".nav-list-btn");
  const navList = document.querySelector(".nav-list");

  function openList() {
    navList.classList.toggle("show");
  }

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (
      !e.target.closest(".nav-list") &&
      !e.target.closest(".nav-list-btn")
    ) {
      navList.classList.remove("show");
    }
  });

  window.openList = openList;