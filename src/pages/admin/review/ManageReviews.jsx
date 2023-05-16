
const ManageReview = () => {
     return (
     <>
       <div className="row">
            <div className="col-md-12 grid-margin">
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex align-items-end flex-wrap">
                  <div className="me-md-3 me-xl-5">
                    <h3>Manage Product Review,</h3>
                    {/* <p className="mb-md-0">Your analytics dashboard.</p> */}
                    <div className="d-flex">
                      <i className="mdi mdi-home text-muted hover-cursor"></i>
                      <p className="text-muted mb-0 hover-cursor">
                        &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                      </p>
                      <p className="text-primary mb-0 hover-cursor">Customer</p>
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
                  <p className="card-title"></p>
                  <div className="table-responsive">
                    <table id="recent-purchases-listing" className="table">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>Product Id</th>
                          {/* <th>Office</th> */}
                          <th>Rating</th>
                          <th>Review</th>
                          {/* <th>Quantity</th>
                          <th>Gross amount</th> */}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Men Regular Fit Solid Spread Collar Formal Shirt</td>
                          <td>Formal</td>
                          {/* <td></td> */}
                          {/* <td>5</td>
                          <td>₹2,245</td> */}
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    

     );
}

export default ManageReview;