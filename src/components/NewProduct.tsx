const NewProduct = () => {
  return (
    <div className="row  justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Add new product
            </h2>
            <form>
              <div className="form-group">
                <label htmlFor="p-name">Product Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="p-name"
                  placeholder="Put product name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="p-price">Product Price</label>
                <input
                  type="number"
                  className="form-control"
                  name="p-price"
                  placeholder="Put product price"
                  min="0"
                  step="1"
                  defaultValue="10"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Add Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
