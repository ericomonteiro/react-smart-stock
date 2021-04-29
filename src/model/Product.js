class Product {
    constructor(id, name, details, price, stock) {
        this.id = id;
        this.name = name;
        this.details = details;
        this.price = price;
        this.stock = stock;
    }

    static fromListObject(list) {
        console.log(list);
        return list.map(
            p => new Product(p.id, p.name, p.details, p.price, p.stock)
        );
    }

}

export default Product;