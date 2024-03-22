class Product {
    constructor(id, title, category, description, price, image) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.description = description;
        this.price = price;
        this.image = image;
    }
}

function fetchProducts(apiCategory) {
    fetch(`https://fakestoreapi.com/products${apiCategory}`)
        .then(res => res.json())
        .then(productData => {
            const products = productData.map(item => new Product(item.id, item.title, item.category, item.description, item.price, item.image))
            createCards(products);
        })
        .catch(error => {
            console.error('Error fetching', error);
        });
}

function createCards(products) {
    const container = document.getElementById('container');
    const instances = products.length;

    for (let index = 0; index < instances; index++) {
        const div = document.createElement('div');
        div.className = "col-sm-6 col-md-3 col-lg-2 ms-3 mt-3 full-page d-flex justify-content-center";
        div.innerHTML = `
        <div class="card">
                <div class="card-img-container">
                    <img src="${products[index].image}" class="card-img-top" style="max-width: 80%; height: auto;" alt="">
                </div>
                    <div class="card-body">
                        <h5 class="card-title">${products[index].title}</h5>
                            <div class="bread-container">
                                <p class="card-text">Price: ${products[index].price}$</p>
                                <a href="#"class="btn-custom">Purchase</a>
                            </div>
                    </div>
        </div>`;
        container.appendChild(div);
    }
}

function reloadPageWithCategory(apiCategory) {
    window.location.href = `?category=${apiCategory}`;
}

const mensClothing = encodeURIComponent("men's clothing")
const womensClothing = encodeURIComponent("women's clothing")

const btnMappings =
    [
        {
            elementId: "category-all-btn",
            urlPath: ""
        },
        {
            elementId: "category-jewelry-btn",
            urlPath: "/category/jewelery"
        },
        {
            elementId: "category-mens-btn",
            urlPath: `/category/${mensClothing}`
        },
        {
            elementId: "category-womens-btn",
            urlPath: `/category/${womensClothing}`
        },
        {
            elementId: "category-electronics-btn",
            urlPath: "/category/electronics"
        }
    ]

function populateButtons(btnMappings) {
    btnMappings.forEach(element => {
        document.getElementById(element.elementId).addEventListener('click', function () {
            fetchProducts(element.urlPath)
            reloadPageWithCategory(element.urlPath)
        })
    });
}

document.addEventListener(`DOMContentLoaded`, function () {
    populateButtons(btnMappings);
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category' || '');
    console.log(category);
    fetchProducts(category);
})