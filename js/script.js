document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
});

function addToCart(productName) {
    alert(`Produto "${productName}" adicionado ao carrinho!`);
}