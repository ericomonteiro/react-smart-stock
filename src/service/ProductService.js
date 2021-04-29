import React from 'react';
import Product from '../model/Product'

class ProductService {    

    static getAllProducts(onSuccess) {
        fetch("http://localhost:8080/v1/product")
        .then(res => res.json())
        .then(
          (result) => {
            onSuccess(Product.fromListObject(result));
          },
          (error) => {
            console.log(error);
          }
        )
    }

}

export default ProductService;