document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItems = document.querySelector('#cart-items');
    const cartTotal = document.querySelector('#cart-total');
    const cartCount = document.querySelector('#cart-count');
    const clearCartButton = document.querySelector('#clear-cart');
    const checkoutButton = document.querySelector('#checkout');

    let cart = [];

    // Menu toggle for mobile
    if (menuToggle && sidebar) {
        menuToggle.addEventListener('click', () => {
            sidebar.classList.toggle('active');
        });
    }

    // Dropdown menu toggle
    if (dropdownToggle && dropdownMenu) {
        dropdownToggle.addEventListener('click', (e) => {
            e.preventDefault();
            dropdownMenu.classList.toggle('active');
        });
    }

    // Load cart from localStorage
    if (localStorage.getItem('cart')) {
        cart = JSON.parse(localStorage.getItem('cart'));
        updateCart();
    }

    // Add to cart functionality
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            const price = parseFloat(button.getAttribute('data-price'));
            const id = button.getAttribute('data-id');

            const item = { id, product, price };
            cart.push(item);
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();

            alert(`Produto "${product}" adicionado ao carrinho!`);
        });
    });

    // Clear cart
    if (clearCartButton) {
        clearCartButton.addEventListener('click', () => {
            cart = [];
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCart();
        });
    }

    // Checkout (placeholder)
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert('Finalizar compra - funcionalidade a ser implementada');
        });
    }

    // Update cart display
    function updateCart() {
        if (cartItems && cartTotal && cartCount) {
            cartItems.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price;
                const li = document.createElement('li');
                li.textContent = `${item.product} - R$ ${item.price.toFixed(2)}`;
                cartItems.appendChild(li);
            });

            cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
            cartCount.textContent = cart.length;
        }
    }
});