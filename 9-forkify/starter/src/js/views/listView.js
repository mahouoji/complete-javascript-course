import { elements } from './base';

const createItem = item => {
    return `
    <li class="shopping__item" data-itemid=${item.id}>
        <div class="shopping__count">
            <input type="number" value="${item.count}" step="${item.count}" class="shopping__count-value">
            <p>${item.unit}</p>
        </div>
        <p class="shopping__description">${item.ingredient}</p>
        <button class="shopping__delete btn-tiny">
            <svg>
                <use href="img/icons.svg#icon-circle-with-cross"></use>
            </svg>
        </button>
    </li>
    `;
}

export const renderItem = item => {
    const markup = createItem(item);
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const renderItemList = items => {
    elements.shopping.innerHTML = ''; // clear all content
    const markup = items.map(item => createItem(item)).join(' ');
    elements.shopping.insertAdjacentHTML('beforeend', markup);
};

export const deleteItem = id => {
    const item = document.querySelector(`[data-itemid="${id}"]`);
    if (item) item.parentElement.removeChild(item);
};
