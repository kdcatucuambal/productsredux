import {
    ADD_PRODUCT,
    ADD_PRODUCT_ERROR,
    ADD_PRODUCT_SUCCESS,
    START_DOWNLOAD_ERROR,
    START_DOWNLOAD_PRODUCTS,
    START_DOWNLOAD_SUCCESS,
    GET_PRODUCT_DELETE,
    PRODUCT_DELETE_ERROR,
    PRODUCT_DELETE_SUCCESS,
    PRODUCT_EDIT_ERROR,
    PRODUCT_EDIT_SUCCESS,
    GET_PRODUCT_EDIT,
} from "../types";

// each reducer has your own state
const initialState = {
    products: [],
    error: null,
    loading: false,
    productDelete: null,
    productEdit: null
}

export default function productReducer(state = initialState, action: any) {
    switch (action.type) {
        case ADD_PRODUCT:
        case START_DOWNLOAD_PRODUCTS:
            return {
                ...state,
                loading: true
            }
        case ADD_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: [...state.products, action.payload]
            }
        case ADD_PRODUCT_ERROR:
        case START_DOWNLOAD_ERROR:
        case PRODUCT_DELETE_ERROR:
        case PRODUCT_EDIT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case START_DOWNLOAD_SUCCESS:

            return {
                ...state,
                loading: false,
                error: null,
                products: action.payload
            }
        case GET_PRODUCT_DELETE:
            return {
                ...state,
                productDelete: action.payload
            }
        case PRODUCT_DELETE_SUCCESS:
            return {
                ...state,
                products: state.products.filter(product => product.id !== state.productDelete),
                productDelete: null
            }
        case GET_PRODUCT_EDIT:
            return {
                ...state,
                productEdit: action.payload
            }
        case PRODUCT_EDIT_SUCCESS:
            return {
                ...state,
                productEdit: null,
                products: state.products.map(
                    product => product.id === action.payload.id ?
                        product = action.payload : product
                )
            }
        default:
            return state;
    }
}