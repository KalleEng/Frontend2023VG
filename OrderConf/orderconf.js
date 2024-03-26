function getCart(){
    const cart = JSON.parse(localStorage.getItem("productToCart"));
    console.log(cart)
    console.log("hej")

    const container = document.getElementById("product-container");
    container.innerHTML=`
    <div class ="card-img-container">
        <img src="${cart.image}" class="card-img-top" style="max-height: 300px; width: auto;" alt="">
    </div>
    
    <div class="bread-container-conf">
    <h5 class="card-title">${cart.title}</h5>
            <p class="card-txt">${cart.description}</p>
    </div>
   
    `   
}

getCart();