import { editProductsAPI } from "../services/editProductApi";
import { getProductsAPI } from "../services/getProductsApi";
import { createMarkupProducts } from "../layoutProducts";
import { deleteProduct } from "../deletingProduct";

export const openModal = () => {
  const editModalEl = document.querySelector(".edit-backdrop");
  const editModalCloseEl = document.querySelector(".close-edit-modal");
  let parentId;

  document.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-button")) {
      editModalEl.classList.remove("is-hidden");
      document.body.classList.add("no-scroll");
      parentId = e.target.parentElement.id;
    }
  });

  editModalCloseEl.addEventListener("click", () => {
    editModalEl.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");
  });

  const formEl = document.querySelector(".edit-form__info");

  formEl.addEventListener("submit", async (e) => {
    e.preventDefault();
    editModalEl.classList.add("is-hidden");
    document.body.classList.remove("no-scroll");

    const productToEdit = {
      name: `${formEl.elements.name.value}`,
      price: `${formEl.elements.price.value}`,
      img: `${formEl.elements.img.value}`,
    };

    try {
      await editProductsAPI(productToEdit, parentId);

      const data = await getProductsAPI();

      createMarkupProducts(data);
      deleteProduct();
      openModal();
    } catch(error) {
      console.error(error);
    }
  });
};
