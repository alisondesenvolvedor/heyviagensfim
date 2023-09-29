document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggler");
  const mainNavigation = document.querySelector(".main-navigation");

  menuToggle.addEventListener("click", function () {
      mainNavigation.classList.toggle("active");
  });

  const menuItems = document.querySelectorAll(".navigation-box a");

  menuItems.forEach(function (item) {
      item.addEventListener("click", function () {
          mainNavigation.classList.remove("active");
      });
  });
});
