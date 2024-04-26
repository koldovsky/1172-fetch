const products = [
    {
        id: '1',
        title: 'Baby Yoda',
        description: 'Bring home the mystique of the galaxy with this charming Baby Yoda figurine, perfect for fans of all ages. Crafted with attention to detail, this collectible embodies the beloved character’s wisdom and cuteness.',
        price: 9.99,
        image: 'img/baby-yoda.svg'
    },
    {
        id: '2',
        title: 'Banana',
        description: 'This vibrant, peel-and-play toy banana is made from durable, child-safe materials. It offers a fun way for kids to learn about fruits and healthy eating habits through imaginative play.',
        price: 12.99,
        image: 'img/banana.svg'
    },
    {
        id: '3',
        title: 'Girl',
        description: 'Meet Emma, a friendly doll with a love for adventures. Emma comes dressed in a pretty pink dress and features yarn hair and a sweet embroidered face, making her the perfect companion for your child.',
        price: 11.99,
        image: 'img/girl.svg'
    },
    {
        id: '4',
        title: 'Viking',
        description: 'Embark on epic journeys with this rugged Viking figurine. Featuring historically inspired armor and accessories, this toy is ideal for educational play or as a unique addition to any collector’s shelf.',
        price: 12.99,
        image: 'img/viking.svg'
    },
];

function renderProducts(products) {
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
        Buy - ${product.price}
        </button>
        </div>
        </article>`;
    }
    document.querySelector('.products__list').innerHTML = productsHtml;
}

renderProducts(products);