import axios from "axios";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import './add.css';

export default function AddProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("");

//     uploadData();
     addPrdouct();

  };

  const uploadData = async () => {
     const formdata = new FormData();
    formdata.append("product_tittle", inputs.product_tittle);
    formdata.append("product_details", inputs.product_details);
    formdata.append("product_price", inputs.product_price);
    formdata.append("product_brand", inputs.product_brand);
    formdata.append("product_quantity", inputs.product_quantity  );
    formdata.append("product_review", inputs.product_review);
    formdata.append("category", inputs.category);
    formdata.append("sub_category", 0);
    formdata.append("product_availability", inputs.product_availability);
    formdata.append("product_highlight", inputs.product_highlight);
    formdata.append("remark", inputs.remark);
    formdata.append("image", file);

//     console.log(formdata.values);
//     console.log(inputs.product_tittle);

     const responce = await axios.post("http://127.0.0.1:5000/product", formdata, {
          headers: {
               'Content-Type': 'multipart/form-data'
          },

     });

     if (responce.status == 200) {
          alert("success")
     } else {
          alert("fail")
     }
  }

  const addPrdouct = () => {
     // var formdata = new FormData();
     // formdata.append("product_tittle", "ascac");
     // formdata.append("product_details", "cvdfv");
     // formdata.append("product_price", "344");
     // formdata.append("product_brand", "vdvd");
     // formdata.append("product_quantity", "4");
     // formdata.append("category", "3");
     // formdata.append("sub_category", "0");
     // formdata.append("product_availability", "0");
     // formdata.append("product_highlight", "0");
     // formdata.append("remark", "df");
     // formdata.append("image", fileInput.files[0], "/C:/Users/pmeet/OneDrive/Pictures/Screenshots/Screenshot (309).png");
     
     const formdata = new FormData();
    formdata.append("product_tittle", inputs.product_tittle);
    formdata.append("product_details", inputs.product_details);
    formdata.append("product_price", inputs.product_price);
    formdata.append("product_brand", inputs.product_brand);
    formdata.append("product_quantity", inputs.product_quantity  );
    formdata.append("product_review", inputs.product_review);
    formdata.append("category", inputs.category);
    formdata.append("sub_category", 0);
    formdata.append("product_availability", inputs.product_availability);
    formdata.append("product_highlight", inputs.product_highlight);
    formdata.append("remark", inputs.remark);
    formdata.append("image", file);

     
     var requestOptions = {
       method: 'POST',
       body: formdata,
       redirect: 'follow'
     };
     
     fetch("http://127.0.0.1:5000/product", requestOptions)
       .then(response => response.text())
       .then(result => alert("Added"))
       .catch(error => console.log('error', error));
  }

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper  full-page-wrapper">
          <div className="content-wrapper d-flex justify-content-center align-items-center auth px-0">
            <div className="col-8 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4>Manage Order</h4>
                  {/* <h6 class="font-weight-light">
                    Signing up is easy. It only takes a few steps
                  </h6> */}
                  <form onSubmit={handleSubmit} className="form-sample" enctype="multipart/form-data">
                    <p className="card-description">Product info</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Title
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="title"
                              placeholder="Product Title"
                              className="form-control"
                              name="product_tittle"
                              value={inputs.product_tittle || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Image
                          </label>
                          <div className="col-sm-9">
                            <input
                              class="form-control"
                              type="file"
                              name="image"
                              id="formFile"
                              onChange={(e) => setFile(e.target.files[0])}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Product Details
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleTextarea1"
                          placeholder="Product Details"
                          rows="4"
                          name="product_details"
                          value={inputs.product_details || ""}
                          onChange={handleChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="row"></div>

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Price
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="number"
                              className="form-control"
                              id="exampleInputprice"
                              placeholder="Product Price"
                              name="product_price"
                              value={inputs.product_price || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Brand
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputbrand"
                              placeholder="Product Brand"
                              name="product_brand"
                              value={inputs.product_brand || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Quantity
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="number"
                              className="form-control"
                              id="exampleInputPQuantity"
                              placeholder="Product Quantity"
                              name="product_quantity"
                              value={inputs.product_quantity || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Category
                          </label>
                          <div className="col-sm-9">
                            <select
                              value={inputs.category || "Select"}
                              className="form-control"
                              id="exampleSelectPCategory"
                              name="category"
                              onChange={handleChange}
                            >
                              <option value="Select">Select</option>
                              <option value="Acrylic">Acrylic</option>
                              <option value="Cotton">Cotton</option>
                              <option value="Plastic">Plastic</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <p className="card-description">Address Line 1</p> */}
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Availability
                          </label>
                          <div className="col-sm-9">
                            <select
                              value={inputs.product_availability || "Select"}
                              className="form-control"
                              onChange={handleChange}
                              name="product_availability"
                              id="exampleSelectPAvailability"
                            >
                              <option value="Select">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Product Highlights
                          </label>
                          <div className="col-sm-9">
                            <select
                              value={inputs.product_highlight || "Select"}
                              className="form-control"
                              id="exampleSelectPHighlights"
                              name="product_highlight"
                              onChange={handleChange}
                            >
                              <option value="Select">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Remark
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="text"
                              className="form-control"
                              id="exampleInputremark"
                              placeholder="Remark"
                              name="remark"
                              value={inputs.remark || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      {/* <div className="col-md-6">
                      <div className="form-group row">
                        <label className="col-sm-3 col-form-label">
                          Country
                        </label>
                        <div className="col-sm-9">
                          <select className="form-control">
                            <option>America</option>
                            <option>Italy</option>
                            <option>Russia</option>
                            <option>Britain</option>
                          </select>
                        </div>
                      </div>
                    </div> */}
                    </div>
                    {/* <div class="mb-4">
                      <div class="form-check">
                        <label class="form-check-label text-muted">
                          <input type="checkbox" class="form-check-input" />I
                          agree to all Terms & Conditions
                        </label>
                      </div>
                    </div> */}
                    {/* <div class="mt-3">
                      <Link
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        to="/home"
                      >
                        SIGN UP
                      </Link>
                    </div>
                    <div class="text-center mt-4 font-weight-light">
                      Already have an account?{" "}
                      <Link to="/" class="text-primary">
                        Login
                      </Link>
                    </div> */}

                    <button type="submit" className="btn btn-primary me-2">
                      Submit
                    </button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
