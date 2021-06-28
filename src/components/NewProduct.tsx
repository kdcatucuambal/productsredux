//Actions from redux
import React, { useState } from "react";
import { createNewProductAction } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";


const NewProduct = ({ history }) => {
  //state component
  const [name, setName] = useState('');
  const [price, setPrice] = useState<number>(100);

  //use disparch and return a function
  const dispatch = useDispatch();

  //Accedeer al state
  const state = useSelector((state: any) => state.productos);




  // llamar action productAction
  const addProduct = (product) => dispatch(createNewProductAction(product));

  const handleNewProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    //validate
    if (name.trim() === "" || price <= 0) {
      return;
    }

    //there are no erros

    //create product
    addProduct({ name, price });

    //Redirect home
    history.push("/");
  }

  return (
    <div className="row  justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new product
            </h2>
            <form onSubmit={handleNewProduct}>
              <div className="form-group">
                <label htmlFor="p-name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="p-name"
                  placeholder="Put product name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="p-price">Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="p-price"
                  placeholder="Put product price"
                  step="1"
                  value={price}
                  onChange={e => setPrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add Product
              </button>
            </form>
            {state.loading ? <p>Loading ...</p> : null}
            {state.error ? <p className="alert alert-danger p2 mt-4 text-center">There is an error</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
