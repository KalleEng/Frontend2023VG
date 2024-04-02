function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart)
    console.log("hej")

    const container = document.getElementById("cart-container");
    container.innerHTML = "";

    cart.forEach((item, index) => {
        container.innerHTML += `
        <div class ="card-img-container">
            <img src="${item.product.image}" class="card-img-top" style="max-height: 300px; width: auto;" alt="">
        </div>
    
        <div class="bread-container-conf">
            <h5 class="card-title">${item.product.title}</h5>
            <p class="card-txt">$${item.product.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <button onclick="changeQuantity(${index}, 1)">Add Item</button>
            <button onclick="changeQuantity(${index}, -1)">Remove Item</button>
        </div>`;
        
    });

    const totalSum = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    container.innerHTML += `
        <div class="total-sum">
            <h3>Total: $${totalSum.toFixed(2)}</h3>
        </div>
        <button onclick="removeAllItems()" class="clear-btn">Remove All Items</button>
    `;
}

function changeQuantity(index, change){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if((cart[index].quantity + change) > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
}

function removeAllItems(){
    localStorage.removeItem("cart");

    getCart();

    alert("All products have been removed");
}

getCart();