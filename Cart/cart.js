function getCart() {
    // const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // const container = document.getElementById("cart-container");
    // container.innerHTML = "";

    // cart.forEach((item, index) => {
    //     container.innerHTML += `
    //     <div class ="card-img-container">
    //         <img src="${item.product.image}" class="card-img-top" style="max-height: 300px; width: auto;" alt="">
    //     </div>

    //     <div class="bread-container-conf">
    //         <h5 class="card-title">${item.product.title}</h5>
    //         <p class="card-txt">$${item.product.price.toFixed(2)}</p>
    //         <p>Quantity: ${item.quantity}</p>
    //         <button onclick="changeQuantity(${index}, 1)">Add Item</button>
    //         <button onclick="changeQuantity(${index}, -1)">Remove Item</button>
    //     </div>`;

    // });

    // const totalSum = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    // container.innerHTML += `
    //     <div class="total-sum">
    //         <h3>Total: $${totalSum.toFixed(2)}</h3>
    //     </div>
    //     <button onclick="removeAllItems()" class="clear-btn">Remove All Items</button>
    //     <button onclick="proceedToOrder()" class="proceed-btn">Proceed</button>
    // `;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const container = document.getElementById("cart-container");


    let tableHtml = `
        <table class="cart-table">
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th>Add</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
    `;


    let totalSum = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.product.price * item.quantity;
        totalSum += itemTotal;

        tableHtml += `
            <tr>
                <td><img src="${item.product.image}" style="width: 100px; height: auto;" alt="${item.product.title}"></td>
                <td>${item.product.title}</td>
                <td>$${item.product.price.toFixed(2)}</td>
                <td>${item.quantity}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button onclick="changeQuantity(${index}, 1)">+</button></td>
                <td><button onclick="changeQuantity(${index}, -1)">-</button></td>
            </tr>
        `;
    });


    tableHtml += `
            </tbody>
        </table>
        <div class="total-sum">
            <h3>Total: $${totalSum.toFixed(2)}</h3>
        </div>
        <button onclick="removeAllItems()" class="clear-btn">Remove All Items</button>
        <button onclick="proceedToOrder()" class="proceed-btn">Proceed</button>
    `;


    container.innerHTML = tableHtml;

}

function changeQuantity(index, change) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if ((cart[index].quantity + change) > 0) {
        cart[index].quantity += change;
    } else {
        cart.splice(index, 1);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    getCart();
}

function removeAllItems() {
    localStorage.removeItem("cart");

    getCart();

    alert("All products have been removed");
}

function proceedToOrder() {
    window.location.href = "../Order/order.html";
}

getCart();