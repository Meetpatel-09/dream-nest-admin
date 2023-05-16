import { useState } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";

export default function Register() {

  const [inputs, setInputs] = useState({});

  const navigate = useNavigate();
  // const history = useHistory();

  const apiUrl = "http://127.0.0.1:5000/customer";

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
    // navigate("/otpverification");  
    navigate("/otpverification", {state:inputs});
    // history.push({ 
    //   pathname: '/otpverification', 
    //   inputs
    //  });
  }

  return (
    <>
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper  full-page-wrapper">
          <div className="content-wrapper d-flex justify-content-center align-items-center auth px-0">
            <div className="col-8 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4>New here?</h4>
                  <h6 class="font-weight-light">
                    Signing up is easy. It only takes a few steps
                  </h6>
                  <form onSubmit={handleSubmit} className="form-sample">
                    <p className="card-description">Personal info</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            First Name
                          </label>
                          <div className="col-sm-9">
                            <input 
                            type="text" 
                            placeholder="First Name" 
                            className="form-control" 
                            name="first_name"
                            value={inputs.first_name || ""}
                            onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Last Name
                          </label>
                          <div className="col-sm-9">
                            <input 
                            type="text" 
                            placeholder="Last Name" 
                            className="form-control" 
                            name="last_name"
                            value={inputs.last_name || ""}
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
                            Gender
                          </label>
                          <div className="col-sm-9">
                            <select className="form-control">
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Email
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="email"
                              className="form-control"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Mobile Number
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Mobile Number"
                              name="mobile_1"
                              value={inputs.mobile_1 || ""}
                              onChange={handleChange}
                              required
                              minLength="10"
                              maxLength="10"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Alternate Mobile Number
                          </label>
                          <div className="col-sm-9">
                            <input
                              type="tel"
                              className="form-control"
                              placeholder="Alternate Mobile Number"
                              name="mobile_2"
                              value={inputs.mobile_2 || ""}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="card-description">Address Line 1</p>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Address Line 1
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            State
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Street, Landmark
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            Postcode
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group row">
                          <label className="col-sm-3 col-form-label">
                            City
                          </label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" />
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
                    <div class="mt-3">
                      <button
                        class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                        submit
                      >
                        SIGN UP
                      </button >
                    </div>
                    <div class="text-center mt-4 font-weight-light">
                      Already have an account?{" "}
                      <Link to="/" class="text-primary">
                        Login
                      </Link>
                    </div>
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
