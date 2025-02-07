const modalEl = document.querySelector(".backdrop");
const openButtonEl = document.querySelector(".button");
const closeButtonEl = document.querySelector(".modal__close");

openButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  modalEl.classList.remove("is-hidden");
  document.body.classList.add("no-scroll");
});

closeButtonEl.addEventListener("click", (e) => {
  e.preventDefault();
  modalEl.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");
});