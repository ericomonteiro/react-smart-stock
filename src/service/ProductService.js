import smartStockConfig from '../config/SmartStockConfig';
import Product from '../model/Product'

class ProductService {    

    static insertProduct(product, callback) {   
        console.log(product);

        const requestOptions = {
            method: smartStockConfig.product.insert.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product.toInsertDto())
        };

        fetch(smartStockConfig.product.insert.path, requestOptions)
        .then(callback);
    }

    static getAllProducts(onSuccess) {       
        fetch(smartStockConfig.product.list.path)
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