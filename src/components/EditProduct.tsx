import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editProductAction } from "../actions/productAction";
import { useHistory } from "react-router-dom";

const EditProduct = () => {

  const history = useHistory();

  const dispatch = useDispatch();
  //state
  const [prodEdit, setProduct] = useState({
    name: "",
    price: 0
  });

  const state = useSelector((state: any) => state.productos);
  const product = state.productEdit;
  // if (!product) {
  //   return null;
  // }

  useEffect(() => {
    console.log('use effect edit product');
    setProduct({
      name: product.nombre,
      price: product.precio
    })
  }, [product])

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...prodEdit,
      [e.target.name]: e.target.value
    })
  }

  const handlerSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editProductAction({ id: product.id, nombre: prodEdit.name, precio: prodEdit.price }));
    history.push('/');
  }

  return (
    <div className="row  justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Edit product
            </h2>
            <form onSubmit={handlerSumbit}>
              <div className="form-group">
                <label htmlFor="p-name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Put product name"
                  value={prodEdit.name}
                  onChange={onChangeForm}
                />
              </div>
              <div className="form-group">
                <label htmlFor="p-price">Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="price"
                  placeholder="Put product price"
                  min="0"
                  step="1"
                  defaultValue="10"
                  value={prodEdit.price}
                  onChange={onChangeForm}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Save Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
