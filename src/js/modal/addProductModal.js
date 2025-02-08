import { addProduct } from "../services/addProductApi";
import { getProductsAPI } from "../services/getProductsApi";
import { createMarkupProducts } from "../layoutProducts";
import { deleteProduct } from "../deletingProduct";
import { openModal } from "./editProductModal";

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
    name: `${formEl.elements.name.value}`,
    price: `${formEl.elements.price.value}`,
    image: `${formEl.elements.image.value}`,
  };

  try {
    await addProduct(productToAdd);

    const data = await getProductsAPI();

    createMarkupProducts(data);

    formEl.elements.name.value = "";
    formEl.elements.price.value = "";
    formEl.elements.image.value = "";

    deleteProduct();
    openModal();
  } catch (error) {
    console.error(error);
  }
});