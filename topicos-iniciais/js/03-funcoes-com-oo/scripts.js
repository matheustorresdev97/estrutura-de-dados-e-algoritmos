class Product {

    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    total() {
        return this.product.price * this.product.quantity;
    }

    updatePrice(percentage) {
        this.product.price *= (1 + percentage / 100);
    }

    toString() {
        return `${this.name}, ${this.price}, ${this.quantity}`
    }
}


const p1 = new Product("Laptop", 1000.0, 5);
const p2 = new Product("Headphones", 200.0, 2);

const total1 = p1.total(p1);
const total2 = p2.total(p2);

console.log(total1);
console.log(total2);

p1.updatePrice(10);
p2.updatePrice(5);