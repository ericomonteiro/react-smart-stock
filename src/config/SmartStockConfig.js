
const host = "http://localhost:8080";

const smartStockConfig = {
    host: host,
    product: {
        insert: {
            method: "POST",
            path: host + "/v1/product"
        },
        list: {
            method: "GET",
            path: host + "/v1/product"
        },
        update: {
            method: "PUT",
            path: host + "/v1/product/{id}"
        },
        get: {
            method: "GET",
            path: host + "/v1/product/{id}"
        }
    }
};

export default smartStockConfig;