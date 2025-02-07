export const createMarkupProducts = (data) => {
    const listEl = document.querySelector(".products-list");
    
    const markup = data.map(({ id, name, price, image }) => `
    <li class="products-item" id="${id}">
        <h3 class="products-name">${name}</h3>
        <p class="products-price">${price}</p>
        <img class="products-image" src="${image}" alt="Photo of ${name}"></img>
        <button class="item-button edit-button">Редагувати</button>
        <button id="${id}" class="item-button delete-button">Видалити</button>
    </li>`).join("");

	listEl.innerHTML = markup;
}