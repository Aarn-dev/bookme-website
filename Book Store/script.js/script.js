let cart = [];

function addToCart(bookId) {
    cart.push({ id: bookId });
    updateCartCount();
}

function updateCartCount() {
    const cartCount = cart.length;
    const cartLink = document.querySelector('nav a');
    cartLink.textContent = `Cart (${cartCount})`;
}
