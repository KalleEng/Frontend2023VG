function getCart() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    console.log(cart)
    console.log("hej")

    const container = document.getElementById("product-container");
    container.innerHTML = "";

    cart.forEach(product => {
        container.innerHTML += `
        <div class ="card-img-container">
            <img src="${product.image}" class="card-img-top" style="max-height: 300px; width: auto;" alt="">
        </div>
    
        <div class="bread-container-conf">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-txt">${product.description}</p>
        </div>`;
        
    });
}

getCart();