export const getProductsAPI = async () => {
    let response;
    let data;
    
    try {
        response = await fetch("https://67a69122510789ef0dfbb742.mockapi.io/products/products");
        data = await response.json();

        return data;
    } catch(error) {
        console.error(error);
    }
};