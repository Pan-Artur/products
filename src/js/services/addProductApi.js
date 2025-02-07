export const addProduct = async (addData) => {
  try {
    const options = {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    };

    const response = await fetch("https://67a69122510789ef0dfbb742.mockapi.io/products/products", options);
    const data = await response.json();

    return data;
  } catch(error) {
    console.error(error);
  }
};
