export const deleteProductsAPI = async (productIDtoDelete) => {
  try {
    const response = await fetch(
      `https://67a69122510789ef0dfbb742.mockapi.io/products/products/${productIDtoDelete}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
};
