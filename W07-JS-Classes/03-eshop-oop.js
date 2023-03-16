class Eshop {

    constructor(name, address, vat) {

        this.name = name
        this.address = address
        this.vat = vat
        this.products = []
    }
}

const tShirtsEShop = new Eshop('Super Tshirts', 'Berlin', 1234)
console.log("🚀 ~ tshirts:", tShirtsEShop)

/**
 * CRUD Operations 
 * 
 * Create
 * Retrieve
 * Update
 * Delete
 */

class ProductManager {
    constructor(products) {
        this.products = products
    }

    addProduct(name, price,) {

        const product = {
            name,
            price, // "," trailing comma            
        }
        this.products.push(product)
        
    }
    
    listProducts() {
        
        console.log("🚀 products are:", this.products)
    }
}

const john = new ProductManager(tShirtsEShop.products)
john.addProduct('blue tshirt', 12)
// console.log("🚀 ~ john:", john)
// console.log("🚀 ~ tshirts:", tShirtsEShop)
john.listProducts()
