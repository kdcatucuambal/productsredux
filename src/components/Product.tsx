import { Link, useHistory } from "react-router-dom";

import Swal from "sweetalert2";

//import
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductEditAction } from "../actions/productAction";


const Product = ({ product }) => {

    const dispatch = useDispatch();
    const history = useHistory();//Enable history to enable

    //confirm delete
    const confirmDeleteProduct = id => {
        //ask user
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                //pass to action
                dispatch(deleteProductAction(id));
            }
        })


    }

    //function that redirect

    const redirectEdit = product => {
        dispatch(getProductEditAction(product))
        history.push(`/products/edit/${product.id}`);
    }

    return (
        <tr>
            <td>{product.nombre}</td>
            <td> <span className="font-weight-bold">${product.precio}</span></td>
            <td className="acciones">
                <button type="button" onClick={() => redirectEdit(product)} className="btn btn-primary mr-2">
                    Edit
                </button>
                <button
                    onClick={() => confirmDeleteProduct(product.id)}
                    type="button"
                    className="btn btn-danger">Delete</button>
            </td>
        </tr>
    );
};

export default Product;