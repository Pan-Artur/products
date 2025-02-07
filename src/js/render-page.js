import { getProductsAPI } from "./services/getProductsApi.js";
import { createMarkupProducts } from "./layoutProducts.js";
import { deleteProduct } from "./deletingProduct.js";
import { openModal } from "./modal/editProductModal.js";

const renderPage = async () => {
  try {
    const data = await getProductsAPI();

    createMarkupProducts(data);
    deleteProduct();
    openModal();
  } catch (error) {
    console.error(error);
  }
};

renderPage();
