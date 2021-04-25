import {ApiClient} from "../apiClient";

class ProductService {
    protected  api = new ApiClient('product')
    public update(id:number, product:any) {

    }

}
const productService = new ProductService();


