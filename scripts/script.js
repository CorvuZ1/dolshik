const burgerHeader = document.querySelector("[data-mobile-burger]");
const mobileHeader = document.querySelector("[data-mobile-header]");

burgerHeader.addEventListener("click", () => {
  document.body.classList.toggle("body--overflow-block");
  burgerHeader.classList.toggle("header__burger--active");
  mobileHeader.classList.toggle("header__mobile--active");
})