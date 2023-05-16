import { Link, Outlet } from "react-router-dom";

export default function EmployeeLayout() {
     return (
          <>
          <div className="container-scroller">
            <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
              <div className="navbar-brand-wrapper d-flex justify-content-center">
                <div className="navbar-brand-inner-wrapper d-flex justify-content-between align-items-center w-100">
                  <Link className="navbar-brand brand-logo" to="#">
                    <h5>Shree Ram Selection</h5>
                  </Link>
                  <Link className="navbar-brand brand-logo-mini" to="#">
                    <img src="images/logo-mini.svg" alt="logo" />
                  </Link>
                  <button
                    className="navbar-toggler navbar-toggler align-self-center"
                    type="button"
                    data-toggle="minimize"
                  >
                    <span className="mdi mdi-sort-variant"></span>
                  </button>
                </div>
              </div>
              <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
                <ul className="navbar-nav mr-lg-4 w-100">
                  <li className="nav-item nav-search d-none d-lg-block w-100">
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text" id="search">
                          <i className="mdi mdi-magnify"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Search now"
                        aria-label="search"
                        aria-describedby="search"
                      />
                    </div>
                  </li>
                </ul>
                <ul className="navbar-nav navbar-nav-right">
                  <li className="nav-item dropdown me-1">
                    <Link
                      className="nav-link count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
                      id="messageDropdown"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="mdi mdi-message-text mx-0"></i>
                      <span className="count"></span>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right navbar-dropdown"
                      aria-labelledby="messageDropdown"
                    >
                      <p className="mb-0 font-weight-normal float-left dropdown-header">
                        Messages
                      </p>
                     
                    </div>
                  </li>
                  <li className="nav-item dropdown me-4">
                    <Link
                      className="nav-link count-indicator dropdown-toggle d-flex align-items-center justify-content-center notification-dropdown"
                      id="notificationDropdown"
                      to="#"
                      data-bs-toggle="dropdown"
                    >
                      <i className="mdi mdi-bell mx-0"></i>
                      <span className="count"></span>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right navbar-dropdown"
                      aria-labelledby="notificationDropdown"
                    >
                      <p className="mb-0 font-weight-normal float-left dropdown-header">
                        Notifications
                      </p>
                     
                    </div>
                  </li>
                  <li className="nav-item nav-profile dropdown">
                    <Link
                      className="nav-link dropdown-toggle"
                      to="#"
                      data-bs-toggle="dropdown"
                      id="profileDropdown"
                    >
                      <span className="nav-profile-name">Employee</span>
                    </Link>
                    <div
                      className="dropdown-menu dropdown-menu-right navbar-dropdown"
                      aria-labelledby="profileDropdown"
                    >
                      <Link className="dropdown-item" to="#">
                        <i className="mdi mdi-settings text-primary"></i>
                        Settings
                      </Link>
                      <Link className="dropdown-item" to="/login">
                        <i className="mdi mdi-logout text-primary"></i>
                        Logout
                      </Link>
                    </div>
                  </li>
                </ul>
                <button
                  className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                  type="button"
                  data-toggle="offcanvas"
                >
                  <span className="mdi mdi-menu"></span>
                </button>
              </div>
            </nav>
            <div className="container-fluid page-body-wrapper"> 
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
            <ul className="nav">
              {/* <li className="nav-item">
                <Link className="nav-link" to="">
                  <i className="mdi mdi-home menu-icon"></i>
                  <span className="menu-title">Dashboard</span>
                </Link>
              </li> */}
             
              <li className="nav-item">
                <Link className="nav-link" to="banner">
                  <i className="mdi mdi-bulletin-board menu-icon"></i>
                  <span className="menu-title">Banner</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="category">
                  <i className="mdi mdi-view-headline menu-icon"></i>
                  <span className="menu-title">Category</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="product">
                  <i className="mdi mdi-basket menu-icon"></i>
                  <span className="menu-title">Product</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="employee">
                  <i className="mdi mdi-account menu-icon"></i>
                  <span className="menu-title">Employee</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="order">
                  <i className="mdi mdi-package menu-icon"></i>
                  <span className="menu-title">Order</span>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="customer">
                  <i className="mdi mdi-account-multiple menu-icon"></i>
                  <span className="menu-title">Customer</span>
                </Link>
              </li> */}
              <li className="nav-item">
                <Link className="nav-link" to="feedback">
                  <i className="mdi mdi-gesture-double-tap menu-icon"></i>
                  <span className="menu-title">Feedback</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="review">
                  <i className="mdi mdi-star menu-icon"></i>
                  <span className="menu-title">Review</span>
                </Link>
              </li>
      
              {/* <li className="nav-item">
                <Link className="nav-link" to="contact">
                  <i className="mdi mdi-link menu-icon"></i>
                  <span className="menu-title">Contact</span>
                </Link>
              </li> */}
         
            </ul>
          </nav>
      
          <div className="main-panel">
            <div className="content-wrapper">
      
                   <Outlet />
            
            </div>
          </div>
            </div>
          </div>
        </>
     );
}