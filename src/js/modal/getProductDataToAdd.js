import { addProduct } from "../services/addProductApi";
import { getProductsAPI } from "../services/getProductsApi";
import { createMarkupProducts } from "../layoutProducts";
import { deleteProduct } from "../deletingProduct";
import { openModal } from "./editProductModal";

const formEl = document.querySelector(".form");
const modalEl = document.querySelector(".backdrop");

formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  modalEl.classList.add(".is-hidden");
  document.body.classList.remove("no-scroll");

  const productDataToAdd = {
    name: `${formEl.elements.name.value}`,
    price: `${formEl.elements.price.value}`,
    image: `${formEl.elements.image.value}`,
  };

  try {
    addProduct(productDataToAdd);

    const data = await getProductsAPI();

    createMarkupProducts(data);
    deleteProduct();
    openModal();
  } catch(error) {
    console.error(error);
  }
});

getProductsAPI();
