import Product from "../schema/Product";
import api from "../util/api";

class ProductService {
	async getProducts() {
		const response = await api.get<Product[]>("/products");
		return response.data;
	}
}

const productsService = new ProductService();

export default productsService;
