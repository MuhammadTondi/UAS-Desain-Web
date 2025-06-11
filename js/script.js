// Constants
const CART_STORAGE_KEY = 'cart';
const SHIPPING_COST = 2999000;
const DEBOUNCE_DELAY = 300;
let currentLang = localStorage.getItem('language') || 'en'; // Define currentLang globally

// Cache DOM elements
const domCache = {
    cartCount: null,
    productGrid: null,
    mainContent: null
};

// Initialize DOM cache
function initializeCache() {
    domCache.cartCount = document.querySelector('.cart-count');
    domCache.productGrid = document.querySelector('.product-grid');
    domCache.mainContent = document.querySelector('.main-content');
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Error handling wrapper
function handleError(error, fallbackValue = null) {
    console.error('An error occurred:', error);
    return fallbackValue;
}

// Product Data
const products = [
    {
        id: 1,
        name: "Modern Sofa",
        price: 13999000,
        description: "Elegant modern sofa with premium fabric upholstery and comfortable cushions.",
        image: "images/Modern Sofa.jpg",
        category: "Sofas"
    },
    {
        id: 2,
        name: "Dining Table",
        price: 8999000,
        description: "Solid wood dining table with a contemporary design, perfect for family gatherings.",
        image: "images/Dining Table.jpg",
        category: "Tables"
    },
    {
        id: 3,
        name: "Accent Chair",
        price: 4499000,
        description: "Stylish accent chair with ergonomic design and premium materials.",
        image: "images/accent chair.jpg",
        category: "Chairs"
    },
    {
        id: 4,
        name: "Coffee Table",
        price: 3799000,
        description: "Modern coffee table with storage space and sleek design.",
        image: "images/Coffee Table.jpg",
        category: "Tables"
    },
    {
        id: 5,
        name: "Bookshelf",
        price: 5999000,
        description: "Versatile bookshelf with adjustable shelves and modern aesthetics.",
        image: "images/Bookshelf.jpg",
        category: "Storage"
    },
    {
        id: 6,
        name: "Bed Frame",
        price: 10499000,
        description: "Queen-size bed frame with headboard and premium wood construction.",
        image: "images/Bed Frame.jpg",
        category: "Beds"
    },
    {
        id: 7,
        name: "TV Stand",
        price: 5249000,
        description: "Contemporary TV stand with cable management and ample storage.",
        image: "images/tv stand.jpg",
        category: "Storage"
    },
    {
        id: 8,
        name: "Bar Stools",
        price: 2999000,
        description: "Set of 2 modern bar stools with comfortable seating and sturdy construction.",
        image: "images/bar stool.jpg",
        category: "Chairs"
    },
    {
        id: 9,
        name: "Console Table",
        price: 4199000,
        description: "Elegant console table perfect for entryways and living rooms.",
        image: "images/Console Table.jpg",
        category: "Tables"
    },
    {
        id: 10,
        name: "Armchair",
        price: 6749000,
        description: "Comfortable armchair with premium fabric and modern design.",
        image: "images/Armchair.jpg",
        category: "Chairs"
    }
];

// Format price to Indonesian Rupiah
function formatPrice(price) {
    try {
        return 'Rp ' + new Intl.NumberFormat('id-ID', {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(price);
    } catch (error) {
        return handleError(error, 'Price unavailable');
    }
}

// Cart Management
let cart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY)) || [];

// Debounced cart update
const debouncedCartUpdate = debounce(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartCount();
}, DEBOUNCE_DELAY);

function updateCartCount() {
    if (!domCache.cartCount) return;
    try {
        domCache.cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    } catch (error) {
        handleError(error);
    }
}

function addToCart(productId, quantity = 1) {
    try {
        const product = products.find(p => p.id === productId);
        if (!product) throw new Error('Product not found');

        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                quantity: quantity
            });
        }

        debouncedCartUpdate();
        showNotification('Product added to cart!');
    } catch (error) {
        handleError(error);
        showNotification('Failed to add product to cart', 'error');
    }
}

function removeFromCart(productId) {
    try {
        cart = cart.filter(item => item.id !== productId);
        debouncedCartUpdate();
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    } catch (error) {
        handleError(error);
    }
}

function updateQuantity(productId, newQuantity) {
    try {
        const item = cart.find(item => item.id === productId);
        if (!item) throw new Error('Item not found in cart');
        
        item.quantity = Math.max(1, parseInt(newQuantity) || 1);
        debouncedCartUpdate();
        
        if (window.location.pathname.includes('cart.html')) {
            renderCart();
        }
    } catch (error) {
        handleError(error);
    }
}

function calculateTotal() {
    try {
        return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    } catch (error) {
        return handleError(error, 0);
    }
}

// Product Display Functions
function renderProducts(productsToRender = products) {
    if (!domCache.productGrid) return;

    try {
        domCache.productGrid.innerHTML = productsToRender.map(product => `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image" loading="lazy">
                <div class="product-info">
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-price">${formatPrice(product.price)}</p>
                    <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        `).join('');
    } catch (error) {
        handleError(error);
    }
}

function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));
    const product = products.find(p => p.id === productId);

    if (!product) {
        window.location.href = 'shop.html';
        return;
    }

    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    mainContent.innerHTML = `
        <div class="container">
            <div class="product-details">
                <div class="product-gallery">
                    <img src="${product.image}" alt="${product.name}" class="main-image">
                </div>
                <div class="product-info">
                    <h1>${product.name}</h1>
                    <p class="price">${formatPrice(product.price)}</p>
                    <p class="description">${product.description}</p>
                    <div class="quantity-selector">
                        <button onclick="updateQuantity(${product.id}, ${getCurrentQuantity(product.id) - 1})">-</button>
                        <input type="number" value="${getCurrentQuantity(product.id)}" min="1" 
                               onchange="updateQuantity(${product.id}, this.value)">
                        <button onclick="updateQuantity(${product.id}, ${getCurrentQuantity(product.id) + 1})">+</button>
                    </div>
                    <button class="btn" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function renderCart() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    if (cart.length === 0) {
        mainContent.innerHTML = `
            <div class="container">
                <h2>Your cart is empty</h2>
                <a href="shop.html" class="btn">Continue Shopping</a>
            </div>
        `;
        return;
    }

    const subtotal = calculateTotal();
    const total = subtotal; // Shipping removed from total

    console.log('DEBUG: Shipping value removed.'); // Debugging line

    const cartHtml = `
        <div class="container">
            <h2>Shopping Cart</h2>
            <div class="cart-items">
                ${cart.map(item => `
                    <div class="cart-item">
                        <img src="${item.image}" alt="${item.name}">
                        <div class="item-details">
                            <h3>${item.name}</h3>
                            <p>${formatPrice(item.price)}</p>
                            <div class="quantity-selector">
                                <button onclick="updateQuantity(${item.id}, ${item.quantity - 1})">-</button>
                                <input type="number" value="${item.quantity}" min="1" 
                                       onchange="updateQuantity(${item.id}, this.value)">
                                <button onclick="updateQuantity(${item.id}, ${getCurrentQuantity(item.id) + 1})">+</button>
                            </div>
                            <button class="btn-remove" onclick="removeFromCart(${item.id})">Remove</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="cart-summary">
                <h3>${translations[currentLang].cart.orderSummary}</h3>
                <p>${translations[currentLang].cart.subtotal}: ${formatPrice(subtotal)}</p>
                <p class="total">${translations[currentLang].cart.total}: ${formatPrice(total)}</p>
                <a href="checkout.html" class="btn">${translations[currentLang].cart.checkout}</a>
            </div>
        </div>
    `;
    mainContent.innerHTML = cartHtml;
    console.log('DEBUG: Generated cart HTML:', cartHtml); // Debugging line
}

// Utility Functions
function getCurrentQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 1;
}

// Set Active Page Indicator
function setActivePage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');
    
    // Remove active class from all links first
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Function to check if path matches
    const isPathMatch = (linkPath) => {
        if (linkPath === 'index.html') {
            return currentPath.endsWith('/') || currentPath.endsWith('index.html');
        }
        return currentPath.includes(linkPath);
    };
    
    // Find and set active link
    let activeLinkFound = false;
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        if (isPathMatch(linkPath)) {
            link.classList.add('active');
            activeLinkFound = true;
            
            // Update page title based on active link
            const linkText = link.textContent.trim();
            document.title = `${linkText} - Furniture Store`;
        }
    });
    
    // If no exact match found, try to match parent pages
    if (!activeLinkFound) {
        navLinks.forEach(link => {
            const linkPath = link.getAttribute('href');
            if (linkPath === 'shop.html' && 
                (currentPath.includes('product.html') || currentPath.includes('cart.html'))) {
                link.classList.add('active');
            }
        });
    }
}

// Notification System
const notificationTypes = {
    SUCCESS: 'success',
    ERROR: 'error',
    INFO: 'info'
};

function showNotification(message, type = notificationTypes.SUCCESS) {
    // Remove any existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    // Create notification content
    const icon = type === notificationTypes.SUCCESS ? 'check-circle' :
                type === notificationTypes.ERROR ? 'exclamation-circle' : 'info-circle';
    
    notification.innerHTML = `
        <i class="fas fa-${icon}"></i>
        <span>${message}</span>
    `;

    // Add to document
    document.body.appendChild(notification);

    // Trigger animation
    setTimeout(() => notification.classList.add('show'), 10);

    // Remove after delay
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Order Processing
function processOrder(orderData) {
    try {
        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(orderData.email)) {
            throw new Error('Invalid email format');
        }

        // Clear cart after successful order
        cart = [];
        localStorage.removeItem(CART_STORAGE_KEY);
        updateCartCount();
        
        // Show success notification with email confirmation
        showNotification(`Order placed successfully! A confirmation email will be sent to ${orderData.email}`, notificationTypes.SUCCESS);
        
        // Redirect to confirmation page or home
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
    } catch (error) {
        handleError(error);
        showNotification(error.message || 'Failed to process order. Please try again.', notificationTypes.ERROR);
    }
}

// Filter and Sort Functions
function filterProducts(category) {
    const filteredProducts = category === 'all' 
        ? products 
        : products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

function sortProducts(sortBy) {
    const sortedProducts = [...products];
    switch (sortBy) {
        case 'price-low':
            sortedProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            sortedProducts.sort((a, b) => b.price - a.price);
            break;
        case 'name':
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
            break;
    }
    renderProducts(sortedProducts);
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    initializeCache();
    setActivePage();
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    } else if (window.location.pathname.includes('product.html')) {
        renderProductDetails();
    } else if (window.location.pathname.includes('shop.html')) {
        renderProducts();
    }
    updateCartCount();
}); 