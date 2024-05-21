
import axios from "axios";


class ProductService {
    static serverUrl = "http://localhost:8000";

    static getAllProducts() {
        const dataUrl = `${this.serverUrl}/Product`;
        return axios.get(dataUrl);
    }

    static getProduct(productId) {
        const dataUrl = `${this.serverUrl}/Product/${productId}`;
        return axios.get(dataUrl);
    }
}

export default ProductService;
