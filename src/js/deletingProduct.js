import { deleteProductsAPI } from "./services/deleteProductsAPI";
import { getProductsAPI } from "./services/getProductsApi";
import { createMarkupProducts } from "./layoutProducts";
import { openModal } from "./modal/editProductModal";
 
export const deleteProduct = () => {
  document.addEventListener("click", async (e) => {
    if (e.target.classList.contains("delete-button")) {
      const deleteButtonEl = e.target;
      const productId = deleteButtonEl.parentElement.id;

      await deleteProductsAPI(productId)
      const products = await getProductsAPI();
      createMarkupProducts(products);
      openModal();
    }
  });
};
