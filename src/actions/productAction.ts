import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS
} from "../types";

//create new products

export function createNewProductAction(product) {
    return () => {
        console.log(product);
    }
}