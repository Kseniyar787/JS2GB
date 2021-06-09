const products = [
    { id: 1, title: 'Laptop', price: 2000, img: "img/notebook.jpg" },
    { id: 2, title: 'Mouse', price: 20, img: "img/mouse.jpg" },
    { id: 3, title: 'Keyboard', price: 200, img: "img/keyboard.jpg" },
    { id: 4, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 5, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 6, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 7, title: 'Gamepad', price: 50, img: "img/gamepad.jpg", isHit: true },
    { id: 8, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 9, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 10, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
    { id: 11, title: 'Gamepad', price: 50, img: "img/gamepad.jpg" },
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = (card) =>
    `<div class="product-item">
                <img class="img-item" src="${card.img}" alt="item">
                ${card.isHit ? '<p class="mark-item">ХИТ ПРОДАЖ</p>' : ''}
                <h3 class="name-item">${card.title}</h3>
                <div class="item-text">
                <p class="cost-item">${card.price} ₽</p>
                <button class="buy-btn">Купить</button>
                </div>
            </div > `
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item)).join(" ");
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList;
};

renderPage(products);



