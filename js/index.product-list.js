const response = await fetch('api/products.json');
const products = await response.json();
renderProducts(products);

// fetch('api/products.json')
//    .then( response => response.json() )
//    .then( products => renderProducts(products));

function renderProducts(products, rate = 1) {
    let productsHtml = '';
    for (const product of products) {
        productsHtml += `<article class="product-card">
        <img src="${product.image}" alt="${product.title}">
        <h3 class="product-card__h3">${product.title}</h3>
        <p class="product-card__description">${product.description}
        </p>
        <div class="product-card__buttons">
        <button class="product-card__buttons-info button button-card">
        Info
        </button>
        <button class="product-card__buttons-buy button button-card">
        Buy - ${(product.price * rate).toFixed(2)}
        </button>
        </div>
        </article>`;
    }
    document.querySelector('.products__list').innerHTML = productsHtml;
}

let currencies;
async function changeCurrency() {
    const newCurrency = document.querySelector('.products__currency').value;
    if (!currencies) {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        currencies = await response.json();
    }
    const rate = currencies.rates[newCurrency];
    renderProducts(products, rate);
}

// let currencies;
// let lastRefresh = new Date();
// async function changeCurrency() {
//     const refreshTimeoutMSECS = 3600 * 1000;
//     const newCurrency = document.querySelector('.products__currency').value;
//     if (!currencies || (new Date() - lastRefresh > refreshTimeoutMSECS) ) {
//         const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
//         currencies = await response.json();
//         lastRefresh = new Date();
//     }
//     const rate = currencies.rates[newCurrency];
//     renderProducts(products, rate);
// }

document.querySelector('.products__currency').addEventListener('change', changeCurrency);
