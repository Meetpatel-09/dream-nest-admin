import { useEffect, useState } from "react";

const ManageFeedback = () => {

     const [data, setData] = useState(null);
     const [dataAdded, setDataAdded] = useState(0);
   
     const [inputs, setInputs] = useState({});
   
     const apiURL = "http://127.0.0.1:5000/feedback";

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


  useEffect(() => {
     console.log("data");
     fetch(apiURL)
       .then((res) => res.json())
       .then((data) => {
         console.log(data['data']);
         console.log(data['data'][0]);
         setData(data['data']);
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
       category_id: id,
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
         alert("Category Deleted.");
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
                <h3>Manage Feedback,</h3>
                {/* <p className="mb-md-0">Your analytics dashboard.</p> */}
                <div className="d-flex">
                  <i className="mdi mdi-home text-muted hover-cursor"></i>
                  <p className="text-muted mb-0 hover-cursor">
                    &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                  </p>
                  <p className="text-primary mb-0 hover-cursor">Feedback</p>
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
              <p className="card-title">EMPLOYEES</p>
              <div className="table-responsive">
                <table id="recent-purchases-listing" className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Customer Name</th>
                      <th>Feedback</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data &&
                      data.map((item, index) => {
                        return (
                          <tr>
                            <td>{index + 1}</td>
                            <td>{item.first_name + " " + item.last_name}</td>
                            <td>{item.feedback}</td>
                            {/* <td>
                              <i
                                role="button"
                                className="cursor-pointer text-warning mdi mdi-border-color"
                              >
                                {" "}
                              </i>
                              <i
                                role="button"
                                onClick={() => deleteCategory(item.employee_id)}
                                className="text-danger mdi mdi-bitbucket"
                              >
                                {" "}
                              </i>
                            </td> */}
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
    </>
  );
};

export default ManageFeedback;
