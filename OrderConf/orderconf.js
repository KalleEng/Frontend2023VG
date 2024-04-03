function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart)
    console.log("hej")

    const container = document.getElementById("product-container");
    container.innerHTML = "";

    let total = 0;

    let cartHtml = "";

    cart.forEach((item, index) => {
        const itemTotal = item.product.price * item.quantity;
        total += itemTotal;

        cartHtml += `
        <div class ="card-img-container">
            <img src="${item.product.image}" class="card-img-top" style="max-height: 300px; width: auto;" alt="">
        </div>
    
        <div class="bread-container-conf">
            <h5 class="card-title">${item.product.title}</h5>
            <p class="card-txt">${item.product.description}</p>
            <p>Price: $${item.product.price.toFixed(2)}</p>
            <p>Quantity: ${item.quantity}</p>
            <p>Total: $${itemTotal.toFixed(2)}</p>
        </div>`;
        
    });

    container.innerHTML= cartHtml + `
        <div class="grand-total">
            <h3>Total sum: $${total.toFixed(2)}</h3>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', function(){
    const homeLinkClear = document.getElementById('homeLinkClear');

    if(homeLinkClear){
        homeLinkClear.addEventListener('click', function(){
            localStorage.clear();
        });
    }
    getCart();
});

