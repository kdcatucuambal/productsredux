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
    START_PRODUCT_EDIT,
    GET_PRODUCT_EDIT
} from "../types";

import axios from "./../config/axios";
import Swal from "sweetalert2";
import { Dispatch } from "redux";
import { AppActions } from "../interfaces/app.interface";
//create new products

export function createNewProductAction(product) {
    return async (dispatch) => {
        dispatch(addProduct())
        try {
            //insert in the API
            const response = await axios.post('/productos', { nombre: product.name, precio: product.price });
            //if there is no error
            dispatch(addProductSuccess(response.data));

            //alert
            Swal.fire("Success", 'Product added successfully', 'success')
        } catch (error) {
            console.log(error);
            //if there is an error
            dispatch(addProductError(true));

            //alert error
            Swal.fire({
                icon: 'error',
                title: "There is an error",
                text: "Something goes wrong, check app"
            })
        }
    }
}

const addProduct = () => (
    {
        type: ADD_PRODUCT,
    }
)
//if the product save in the database
const addProductSuccess = (product) => ({
    type: ADD_PRODUCT_SUCCESS,
    payload: product
})

//if there an error
const addProductError = (flag) => ({
    type: ADD_PRODUCT_ERROR,
    payload: flag
})


//get productos from data base (api)
export function getProductosAction() {
    return async (dispatch) => {
        dispatch(downloadProducts());

        try {
            const response = await axios.get('/productos');
            console.log(response.data);

            dispatch(downloadProductsSuccess(response.data));
        } catch (error) {
            console.log(error);
            dispatch(downloadProductsError())
        }
    }
}

const downloadProducts = () => ({
    type: START_DOWNLOAD_PRODUCTS,
    payload: true
});

const downloadProductsSuccess = (products) => ({
    type: START_DOWNLOAD_SUCCESS,
    payload: products
})

const downloadProductsError = () => ({
    type: START_DOWNLOAD_ERROR,
    payload: true
})

//SELECT AND DELETE PRODUCT
export function deleteProductAction(id) {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch(getProductDelete(id));
        try {
            await axios.delete(`/productos/${id}`);
            dispatch(deleteProductSuccess());
            //si se elimina
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        } catch (error) {
            dispatch(deleteProductError());
        }
    }
}

const getProductDelete = (id) => ({
    type: GET_PRODUCT_DELETE,
    payload: id
});

const deleteProductSuccess = () => ({
    type: PRODUCT_DELETE_SUCCESS
})

const deleteProductError = () => ({
    type: PRODUCT_DELETE_ERROR,
    payload: true
})

//Put product in edit
export function getProductEditAction(product) {
    return (dispatch) => {
        dispatch({
            type: GET_PRODUCT_EDIT,
            payload: product
        })
    }
}

export function editProductAction(product) {
    return async (dispatch: Dispatch<AppActions>) => {
        dispatch({
            type: START_PRODUCT_EDIT
        })

        try {
            const response = await axios.put(`/productos/${product.id}`, product);
            dispatch({
                type: PRODUCT_EDIT_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: PRODUCT_EDIT_ERROR,
                payload: true
            })
        }
    }
}