import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const OTPVerification = (props) => {
    
    const [inputs, setInputs] = useState({});
    const [otp, setOTP] = useState();

    const navigate = useNavigate();
    const location = useLocation();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }
  let val = Math.floor(1000 + Math.random() * 9000);

  useEffect(() => {
    var myHeaders = new Headers();
    setOTP(val);
  
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NGYzZTkxZmY2NDFkNDFlODU3M2E3YSIsImlhdCI6MTY4MjkxNDk2MiwiZXhwIjoxNjkwNjkwOTYyfQ.kVz4Cl9SkHoywWGT0IS35ojcAjcHlD4vrYJIAti4ovg");
    
    var raw = JSON.stringify({
      "to": `+91${location.state.mobile_1}`,
      "message": `OTP for verifing your account at Shri Ram Selection is ${val}. Do not share this with any one.`
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("http://localhost:3838/send-sms", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));

  }, [])

  const handleSubmit = (event) => {

    console.log("otp")
    console.log(otp)
    console.log("inputs.otp")
    console.log(inputs.otp)
    console.log("val")
    console.log(val)
    event.preventDefault();
    

    if (inputs.otp == otp) {
      console.log("Valid")
      // window.location.href = "/home"
      navigate("/home");
    } else {
      console.log("invalid")
      alert("Invalid OTP")
    }
  }

    return (
        <>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
              <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                    <div className="brand-logo">
                      {/* <img src="../../images/logo.svg" alt="logo" /> */}
                    </div>
              
                    <h4>OTP Verification</h4>
                    <p>An OTP has been send to {location.state.mobile_1}</p>
                    <h6 className="font-weight-light">Enter the code</h6>
                    <form onSubmit={handleSubmit} className="pt-3">
                      <div className="form-group">
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          name="otp"
                          placeholder="Enter OTP"
                          value={inputs.otp || ""} 
                          onChange={handleChange}
                          minLength="6"
                          maxLength="6"
                          required
                        />
                      </div>
                      
                      <div className="mt-3">
                        <button type="submit"
                          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
                          Submit
                        </button>
                      </div>
                      
                      <div className="text-center mt-4 font-weight-light">
                        Don't receive the code?{" "}
                        <Link to="/" className="text-primary">
                          Resend Code
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

export default OTPVerification;