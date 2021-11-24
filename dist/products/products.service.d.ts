import { Model } from "mongoose";
import { Product } from "./product.model";
export declare class ProductsService {
    private readonly productModel;
    private products;
    constructor(productModel: Model<Product>);
    insertProduct(title: string, desc: string, price: number): Promise<string>;
    getProducts(): Promise<Product[]>;
    getSingleProduct(productId: string): Promise<{
        id: string;
        title: string;
        descriptin: string;
        price: number;
    }>;
    updateProduct(productId: string, title: string, desc: string, price: number): Promise<void>;
    private findProduct;
    deleteProduct(prodId: string): Promise<void>;
}
