import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS
} from "../types";

// each reducer has your own state
const initialState = {
    products: [],
    error: null,
    loading: false,
}

export default function (state = initialState, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}