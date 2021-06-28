import { useEffect } from "react";
import { Fragment } from "react";

//Redux
import { useSelector, useDispatch } from "react-redux";
import { getProductosAction } from "../actions/productAction";
import Product from "./Product";

const Products = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    //consult api
    const loadProducts = () => dispatch(getProductosAction());

    loadProducts();

  }, []);

  //get state

  const state = useSelector((state: any) => state.productos);


  return (
    <Fragment>
      <h2 className="text-center my-5">Products List</h2>
      {state.error ?
        <p className="font-weight-bold alert alert-danger text-center mt-4">
          There is an error</p> : null}
      {state.loading ? <p className="text-center">Loading...</p> : null}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {state.products.length === 0 ? 'There are no products' : (
            state.products.map((product: any) => (
              <Product key={product.id} product={product} />
            ))
          )}

        </tbody>
      </table>
    </Fragment>
  );
};

export default Products;
