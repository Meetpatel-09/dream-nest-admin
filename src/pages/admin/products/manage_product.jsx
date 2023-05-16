import { useEffect, useState } from "react";
import AddProduct from "./add_product";

const ManageProduct = () => {
  const [data, setData] = useState(null);
  const [dataAdded, setDataAdded] = useState(0);

  const [inputs, setInputs] = useState({});

  const path = `D:/Meet Final/Pathan/dream-nest-api/instance/uploads/`;

  const apiURL = "http://127.0.0.1:5000/product";

  console.log(data);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // alert(inputs.category_tittle);
  //   var myHeaders = new Headers();
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     category_tittle: inputs.category_tittle,
  //     remark: "",
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(apiURL, requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log(result);
  //       alert("Category Added.");
  //       setInputs({});
  //       setDataAdded(dataAdded + 1);
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  const refresh = () => {
    setDataAdded(dataAdded + 2);
  };

  useEffect(() => {
    console.log("products");
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data["products"]);
        console.log(data["products"][0]);
        setData(data["products"]);

        // if (data["status"] === 201) {
        // }
      });
  }, [dataAdded]);

  const deleteCategory = (id) => {
    // alert(id);

    console.log(id);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      product_id: id,
    });

    var requestOptions = {
      method: "DELETE",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(apiURL, requestOptions)
      .then((response) => response.text())
      // .then(result => console.log(result))
      .then((result) => {
        console.log(result);
        alert("Deleted.");
        setInputs({});
        setDataAdded(dataAdded - 1);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex align-items-end flex-wrap">
              <div className="me-md-3 me-xl-5">
                <h3>Manage Products,</h3>
                {/* <p className="mb-md-0">Your analytics dashboard.</p> */}
                <div className="d-flex">
                  <i className="mdi mdi-home text-muted hover-cursor"></i>
                  <p className="text-muted mb-0 hover-cursor">
                    &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                  </p>
                  <p className="text-primary mb-0 hover-cursor">Products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Product</p>
              <div className="table-responsive">
                <table id="recent-purchases-listing" className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Image</th>
                      <th>Name</th>
                      <th>Category</th>
                      {/* <th>Office</th> */}

                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Is Available</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>
                              <img
                                src={path + item.image}
                                alt=""
                                style={{ height: 50, width: 50 }}
                              />
                            </td>
                            <td>{item.product_tittle}</td>
                            <td>{item.category}</td>
                            <td>{item.product_quantity}</td>
                            <td>₹{item.product_price}</td>
                            <td>
                              {item.product_availability == 0 ? "Yes" : "No"}
                            </td>
                            {/* <td>{item.product_availability}</td> */}

                            <td>
                              <i
                                role="button"
                                className="cursor-pointer text-primary mdi mdi-eye"
                              >
                                {"  "}
                              </i>
                              &nbsp;&nbsp;
                              <i
                                role="button"
                                className="cursor-pointer text-warning mdi mdi-border-color"
                              >
                                {"  "}
                              </i>
                              &nbsp;&nbsp;
                              <i
                                role="button"
                                onClick={() => deleteCategory(item.product_id)}
                                className="text-danger mdi mdi-bitbucket"
                              >
                                {"  "}
                              </i>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddProduct />
    </>
  );
};

export default ManageProduct;
