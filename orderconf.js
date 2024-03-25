function getCart(){
    const cart = JSON.parse(localStorage.getItem("productToCart"));
    console.log(cart)
    console.log("hej")

    const container = document.getElementById("product-container");
    container.innerHTML=`
    <div class ="card-img-container">
        <img src="${cart.image}" class="card-img-top" style="max-height: 300px; width: auto;" alt="">
    </div>
    <div class="card-body">
        <h5 class="card-title">${cart.title}</h5>
        <div class="bread-container">
            <p class="card-text">${cart.description}</p>
    </div>
    `   
}

getCart();