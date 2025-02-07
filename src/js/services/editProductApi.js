export const editProductsAPI = async (editedData, editedProductId) => {
  try {
    const options = {
      method: "PUT",
      body: JSON.stringify(editedData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };
    
    const response = await fetch(`https://67a69122510789ef0dfbb742.mockapi.io/products/products${editedProductId}`, options);
    const data = await response.json();

    return data;
  } catch(error) {
    console.error(error);
  }
};
