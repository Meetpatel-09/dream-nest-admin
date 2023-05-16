import { Link } from "react-router-dom";

export default function AdminHome() {
  return (
    <>
      <div className="row">
        <div className="col-md-12 grid-margin">
          <div className="d-flex justify-content-between flex-wrap">
            <div className="d-flex align-items-end flex-wrap">
              <div className="me-md-3 me-xl-5">
                <h2>Welcome back,</h2>
                <p className="mb-md-0">Your analytics dashboard.</p>
              </div>
              <div className="d-flex">
                <i className="mdi mdi-home text-muted hover-cursor"></i>
                <p className="text-muted mb-0 hover-cursor">
                  &nbsp;/&nbsp;Dashboard&nbsp;/&nbsp;
                </p>
                <p className="text-primary mb-0 hover-cursor">Analytics</p>
              </div>
            </div>
            {/* <div className="d-flex justify-content-between align-items-end flex-wrap">
              <button
                type="button"
                className="btn btn-light bg-white btn-icon me-3 d-none d-md-block "
              >
                <i className="mdi mdi-download text-muted"></i>
              </button>
              <button
                type="button"
                className="btn btn-light bg-white btn-icon me-3 mt-2 mt-xl-0"
              >
                <i className="mdi mdi-clock-outline text-muted"></i>
              </button>
              <button
                type="button"
                className="btn btn-light bg-white btn-icon me-3 mt-2 mt-xl-0"
              >
                <i className="mdi mdi-plus text-muted"></i>
              </button>
              <button className="btn btn-primary mt-2 mt-xl-0">
                Generate report
              </button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 grid-margin stretch-card">
          <div className="card">
            <div className="card-body dashboard-tabs p-0">
              <ul className="nav nav-tabs px-4" role="tablist">
                {/* <li className="nav-item">
                      <a className="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="true">Overview</a>
                    </li> */}
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    id="sales-tab"
                    data-bs-toggle="tab"
                    href="#sales"
                    role="tab"
                    aria-controls="sales"
                    aria-selected="false"
                  >
                    Sales
                  </a>
                </li>
                {/* <li className="nav-item">
                      <a className="nav-link" id="purchases-tab" data-bs-toggle="tab" href="#purchases" role="tab" aria-controls="purchases" aria-selected="false">Purchases</a>
                    </li> */}
              </ul>
              <div className="tab-content py-0 px-0">
                {/* <div className="tab-pane fade show active" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                      <div className="d-flex flex-wrap justify-content-xl-between">
                        <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-calendar-heart icon-lg me-3 text-primary"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Start date</small>
                            <div className="dropdown">
                              <a className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h5 className="mb-0 d-inline-block">26 Jul 2018</h5>
                              </a>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                                <a className="dropdown-item" href="#">12 Aug 2018</a>
                                <a className="dropdown-item" href="#">22 Sep 2018</a>
                                <a className="dropdown-item" href="#">21 Oct 2018</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-currency-inr me-3 icon-lg text-danger"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Revenue</small>
                            <h5 className="me-2 mb-0">$577545</h5>
                          </div>
                        </div>
                        <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-eye me-3 icon-lg text-success"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Total views</small>
                            <h5 className="me-2 mb-0">9833550</h5>
                          </div>
                        </div>
                        <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-download me-3 icon-lg text-warning"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Downloads</small>
                            <h5 className="me-2 mb-0">2233783</h5>
                          </div>
                        </div>
                        <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-flag me-3 icon-lg text-danger"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Flagged</small>
                            <h5 className="me-2 mb-0">3497843</h5>
                          </div>
                        </div>
                      </div>
                    </div> */}
                <div
                  className="tab-pane fade show active"
                  id="sales"
                  role="tabpanel"
                  aria-labelledby="sales-tab"
                >
                  <div className="d-flex flex-wrap justify-content-xl-between">
                    <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                      <i className="mdi mdi-calendar-heart icon-lg me-3 text-primary"></i>
                      <div className="d-flex flex-column justify-content-around">
                        <small className="mb-1 text-muted">Start date</small>
                        <div className="dropdown">
                          <Link
                            className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium"
                            to=""
                            role="button"
                            id="dropdownMenuLinkA"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <h5 className="mb-0 d-inline-block">Feb 2023</h5>
                          </Link>
                          <div
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuLinkA"
                          >
                            <Link className="dropdown-item" to="">
                              March 2023
                            </Link>
                            <Link className="dropdown-item" to="">
                              April 2023
                            </Link>
                            <Link className="dropdown-item" to="">
                              May 2023
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                      <i className="mdi mdi-account me-3 icon-lg text-warning"></i>
                      <div className="d-flex flex-column justify-content-around">
                        <small className="mb-1 text-muted">Customers</small>
                        <h5 className="me-2 mb-0">00</h5>
                      </div>
                    </div>
                    <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                      <i className="mdi mdi-cart me-3 icon-lg text-success"></i>
                      <div className="d-flex flex-column justify-content-around">
                        <small className="mb-1 text-muted">Total Sales</small>
                        <h5 className="me-2 mb-0">00</h5>
                      </div>
                    </div>
                    <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                      <i className="mdi mdi-currency-inr me-3 icon-lg text-danger"></i>
                      <div className="d-flex flex-column justify-content-around">
                        <small className="mb-1 text-muted">Revenue</small>
                        <h5 className="me-2 mb-0">₹00</h5>
                      </div>
                    </div>
                    <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                      <i className="mdi mdi-flag me-3 icon-lg text-danger"></i>
                      <div className="d-flex flex-column justify-content-around">
                        <small className="mb-1 text-muted">Total Returns</small>
                        <h5 className="me-2 mb-0">00</h5>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="tab-pane fade" id="purchases" role="tabpanel" aria-labelledby="purchases-tab">
                      <div className="d-flex flex-wrap justify-content-xl-between">
                        <div className="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-calendar-heart icon-lg me-3 text-primary"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Start date</small>
                            <div className="dropdown">
                              <a className="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <h5 className="mb-0 d-inline-block">26 Jul 2018</h5>
                              </a>
                              <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                                <a className="dropdown-item" href="#">12 Aug 2018</a>
                                <a className="dropdown-item" href="#">22 Sep 2018</a>
                                <a className="dropdown-item" href="#">21 Oct 2018</a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-currency-usd me-3 icon-lg text-danger"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Revenue</small>
                            <h5 className="me-2 mb-0">$577545</h5>
                          </div>
                        </div>
                        <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-eye me-3 icon-lg text-success"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Total views</small>
                            <h5 className="me-2 mb-0">9833550</h5>
                          </div>
                        </div>
                        <div className="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-download me-3 icon-lg text-warning"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Downloads</small>
                            <h5 className="me-2 mb-0">2233783</h5>
                          </div>
                        </div>
                        <div className="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                          <i className="mdi mdi-flag me-3 icon-lg text-danger"></i>
                          <div className="d-flex flex-column justify-content-around">
                            <small className="mb-1 text-muted">Flagged</small>
                            <h5 className="me-2 mb-0">3497843</h5>
                          </div>
                        </div>
                      </div>
                    </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12 stretch-card">
          <div className="card">
            <div className="card-body">
              <p className="card-title">Recent Sales</p>
              <div className="table-responsive">
                <table id="recent-purchases-listing" className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      {/* <th>Office</th> */}
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Gross amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Men Regular Fit Solid Spread Collar Formal Shirt</td>
                      <td>Formal</td>
                      <td>₹449</td>
                      <td>5</td>
                      <td>₹2,245</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Men Regular Fit Solid Spread Collar Formal Shirt</td>
                      <td>Casual</td>
                      <td>₹749</td>
                      <td>2</td>
                      <td>₹1,245</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Men Regular Fit Solid Spread Collar Formal Shirt</td>
                      <td>Suits</td>
                      <td>₹4490</td>
                      <td>3</td>
                      <td>₹22,245</td>
                    </tr>
                    {/*
                        <tr>
                            <td>Alvin Fisher</td>
                            <td>Ui design completed</td>
                            <td>East Mayra</td>
                            <td>$23230</td>
                            <td>18 Jul 2018</td>
                            <td>$83127</td>
                        </tr>
                        <tr>
                            <td>Emily Cunningham</td>
                            <td>support</td>
                            <td>Makennaton</td>
                            <td>$939</td>
                            <td>16 Jul 2018</td>
                            <td>$29177</td>
                        </tr>
                        <tr>
                            <td>Minnie Farmer</td>
                            <td>support</td>
                            <td>Agustinaborough</td>
                            <td>$30</td>
                            <td>30 Apr 2018</td>
                            <td>$44617</td>
                        </tr>
                        <tr>
                            <td>Betty Hunt</td>
                            <td>Ui design not completed</td>
                            <td>Lake Sandrafort</td>
                            <td>$571</td>
                            <td>25 Jun 2018</td>
                            <td>$78952</td>
                        </tr>
                        <tr>
                            <td>Myrtie Lambert</td>
                            <td>Ui design completed</td>
                            <td>Cassinbury</td>
                            <td>$36</td>
                            <td>05 Nov 2018</td>
                            <td>$36422</td>
                        </tr>
                        <tr>
                            <td>Jacob Kennedy</td>
                            <td>New project</td>
                            <td>Cletaborough</td>
                            <td>$314</td>
                            <td>12 Jul 2018</td>
                            <td>$34167</td>
                        </tr>
                        <tr>
                            <td>Ernest Wade</td>
                            <td>Levelled up</td>
                            <td>West Fidelmouth</td>
                            <td>$484</td>
                            <td>08 Sep 2018</td>
                            <td>$50862</td>
                        </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <>
    //   <div className="container-scroller">
    //     <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    //       <div className="navbar-brand-wrapper d-flex justify-content-center">
    //         <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
    //           <Link className="navbar-brand brand-logo" to="#">
    //             {/* <img src="images/logo.svg" alt="logo" /> */}
    //           </Link>
    //           <Link className="navbar-brand brand-logo-mini" to="#">
    //             {/* <img src="images/logo-mini.svg" alt="logo" /> */}
    //           </Link>
    //           <button
    //             className="navbar-toggler navbar-toggler align-self-center"
    //             type="button"
    //             data-toggle="minimize"
    //           >
    //             <span className="mdi mdi-sort-variant"></span>
    //           </button>
    //         </div>
    //       </div>
    //       <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
    //         <ul className="navbar-nav mr-lg-4 w-100">
    //           <li className="nav-item nav-search d-none d-lg-block w-100">
    //             <div className="input-group">
    //               <div className="input-group-prepend">
    //                 <span className="input-group-text" id="search">
    //                   <i className="mdi mdi-magnify"></i>
    //                 </span>
    //               </div>
    //               <input
    //                 type="text"
    //                 className="form-control"
    //                 placeholder="Search now"
    //                 aria-label="search"
    //                 aria-describedby="search"
    //               />
    //             </div>
    //           </li>
    //         </ul>
    //         <ul className="navbar-nav navbar-nav-right">
    //           <li className="nav-item dropdown me-1">
    //             <Link
    //               className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
    //               id="messageDropdown"
    //               to="#"
    //               data-bs-toggle="dropdown"
    //             >
    //               <i className="mdi mdi-message-text mx-0"></i>
    //               <span className="count"></span>
    //             </Link>
    //             <div
    //               className="dropdown-menu dropdown-menu-right navbar-dropdown"
    //               aria-labelledby="messageDropdown"
    //             >
    //               <p className="mb-0 font-weight-normal float-left dropdown-header">
    //                 Messages
    //               </p>
    //               <Link className="dropdown-item" to="#">
    //                 <div className="item-thumbnail">
    //                   {/* <img
    //                     src="images/faces/face4.jpg"
    //                     alt="image"
    //                     className="profile-pic"
    //                   /> */}
    //                 </div>
    //                 <div className="item-content flex-grow">
    //                   <h6 className="ellipsis font-weight-normal">David Grey</h6>
    //                   <p className="font-weight-light small-text text-muted mb-0">
    //                     The meeting is cancelled
    //                   </p>
    //                 </div>
    //               </Link>
    //               <Link className="dropdown-item" to="#">
    //                 <div className="item-thumbnail">
    //                   {/* <img
    //                     src="images/faces/face2.jpg"
    //                     alt="image"
    //                     className="profile-pic"
    //                   /> */}
    //                 </div>
    //                 <div className="item-content flex-grow">
    //                   <h6 className="ellipsis font-weight-normal">Tim Cook</h6>
    //                   <p className="font-weight-light small-text text-muted mb-0">
    //                     New product launch
    //                   </p>
    //                 </div>
    //               </Link>
    //               <Link className="dropdown-item" to="#">
    //                 <div className="item-thumbnail">
    //                   {/* <img
    //                     src="images/faces/face3.jpg"
    //                     alt="image"
    //                     className="profile-pic"
    //                   /> */}
    //                 </div>
    //                 <div className="item-content flex-grow">
    //                   <h6 className="ellipsis font-weight-normal"> Johnson</h6>
    //                   <p className="font-weight-light small-text text-muted mb-0">
    //                     Upcoming board meeting
    //                   </p>
    //                 </div>
    //               </Link>
    //             </div>
    //           </li>
    //           <li className="nav-item dropdown me-4">
    //             <Link
    //               className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown"
    //               id="notificationDropdown"
    //               to="#"
    //               data-bs-toggle="dropdown"
    //             >
    //               <i className="mdi mdi-bell mx-0"></i>
    //               <span className="count"></span>
    //             </Link>
    //             <div
    //               className="dropdown-menu dropdown-menu-right navbar-dropdown"
    //               aria-labelledby="notificationDropdown"
    //             >
    //               <p className="mb-0 font-weight-normal float-left dropdown-header">
    //                 Notifications
    //               </p>
    //               <Link className="dropdown-item" to="#">
    //                 <div className="item-thumbnail">
    //                   <div className="item-icon bg-success">
    //                     <i className="mdi mdi-information mx-0"></i>
    //                   </div>
    //                 </div>
    //                 <div className="item-content">
    //                   <h6 className="font-weight-normal">Application Error</h6>
    //                   <p className="font-weight-light small-text mb-0 text-muted">
    //                     Just now
    //                   </p>
    //                 </div>
    //               </Link>
    //               <Link className="dropdown-item" to="#">
    //                 <div className="item-thumbnail">
    //                   <div className="item-icon bg-warning">
    //                     <i className="mdi mdi-settings mx-0"></i>
    //                   </div>
    //                 </div>
    //                 <div className="item-content">
    //                   <h6 className="font-weight-normal">Settings</h6>
    //                   <p className="font-weight-light small-text mb-0 text-muted">
    //                     Private message
    //                   </p>
    //                 </div>
    //               </Link>
    //               <Link className="dropdown-item" to="#">
    //                 <div className="item-thumbnail">
    //                   <div className="item-icon bg-info">
    //                     <i className="mdi mdi-account-box mx-0"></i>
    //                   </div>
    //                 </div>
    //                 <div className="item-content">
    //                   <h6 className="font-weight-normal">New user registration</h6>
    //                   <p className="font-weight-light small-text mb-0 text-muted">
    //                     2 days ago
    //                   </p>
    //                 </div>
    //               </Link>
    //             </div>
    //           </li>
    //           <li className="nav-item nav-profile dropdown">
    //             <Link
    //               className="nav-link dropdown-toggle"
    //               to="#"
    //               data-bs-toggle="dropdown"
    //               id="profileDropdown"
    //             >
    //               <img src="images/faces/face5.jpg" alt="profile" />
    //               <span className="nav-profile-name">Louis Barnett</span>
    //             </Link>
    //             <div
    //               className="dropdown-menu dropdown-menu-right navbar-dropdown"
    //               aria-labelledby="profileDropdown"
    //             >
    //               <Link className="dropdown-item" to="#">
    //                 <i className="mdi mdi-settings text-primary"></i>
    //                 Settings
    //               </Link>
    //               <Link className="dropdown-item" to="#">
    //                 <i className="mdi mdi-logout text-primary"></i>
    //                 Logout
    //               </Link>
    //             </div>
    //           </li>
    //         </ul>
    //         <button
    //           className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
    //           type="button"
    //           data-toggle="offcanvas"
    //         >
    //           <span className="mdi mdi-menu"></span>
    //         </button>
    //       </div>
    //     </nav>
    //     <div className="container-fluid page-body-wrapper">
    //     <nav className="sidebar sidebar-offcanvas" id="sidebar">
    //     <ul className="nav">
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <i className="mdi mdi-home menu-icon"></i>
    //           <span className="menu-title">Dashboard</span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" data-bs-toggle="collapse" to="#" aria-expanded="false" aria-controls="ui-basic">
    //           <i className="mdi mdi-circle-outline menu-icon"></i>
    //           <span className="menu-title">UI Elements</span>
    //           <i className="menu-arrow"></i>
    //         </Link>
    //         <div className="collapse" id="ui-basic">
    //           <ul className="nav flex-column sub-menu">
    //             <li className="nav-item"> <Link className="nav-link" to="#">Buttons</Link></li>
    //             <li className="nav-item"> <Link className="nav-link" to="#">Typography</Link></li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <i className="mdi mdi-view-headline menu-icon"></i>
    //           <span className="menu-title">Form elements</span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <i className="mdi mdi-chart-pie menu-icon"></i>
    //           <span className="menu-title">Charts</span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <i className="mdi mdi-grid-large menu-icon"></i>
    //           <span className="menu-title">Tables</span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <i className="mdi mdi-emoticon menu-icon"></i>
    //           <span className="menu-title">Icons</span>
    //         </Link>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" data-bs-toggle="collapse" to="#" aria-expanded="false" aria-controls="auth">
    //           <i className="mdi mdi-account menu-icon"></i>
    //           <span className="menu-title">User Pages</span>
    //           <i className="menu-arrow"></i>
    //         </Link>
    //         <div className="collapse" id="auth">
    //           <ul className="nav flex-column sub-menu">
    //             <li className="nav-item"> <Link className="nav-link" to="#"> Login </Link></li>
    //             <li className="nav-item"> <Link className="nav-link" to="#"> Login 2 </Link></li>
    //             <li className="nav-item"> <Link className="nav-link" to="#"> Register </Link></li>
    //             <li className="nav-item"> <Link className="nav-link" to="#"> Register 2 </Link></li>
    //             <li className="nav-item"> <Link className="nav-link" to="#"> Lockscreen </Link></li>
    //           </ul>
    //         </div>
    //       </li>
    //       <li className="nav-item">
    //         <Link className="nav-link" to="#">
    //           <i className="mdi mdi-file-document-box-outline menu-icon"></i>
    //           <span className="menu-title">Documentation</span>
    //         </Link>
    //       </li>
    //     </ul>
    //   </nav>

    //   <div className="main-panel">
    //     <div className="content-wrapper">

    //            <Outlet />

    //     </div>
    //   </div>
    //     </div>
    //   </div>
    // </>
  );
}
