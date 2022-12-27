// import { Product } from "./products";
import { User } from "./user";




export interface Cart {
    id: number;
    total: number;
    quantity: number;
    // item: Product[];
    item: any;
    user: User;
}