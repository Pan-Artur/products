const modalEl = document.querySelector(".backdrop");
const formEl = document.querySelector(".form");
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

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();

  modalEl.classList.add("is-hidden");
  document.body.classList.remove("no-scroll");

  const productToAdd = {
    name: formEl.elements.name.value,
    price: formEl.elements.price.value,
    img: formEl.elements.img.value,
  };

  try {
    await addProductAPI(productToAdd);

    const data = await getProductsAPI();

    createMarkupProducts(data);

    deleteProduct();
    openModal();
  } catch (error) {
    console.error(error);
  }
});