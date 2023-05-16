import React from "react";
import { Link } from "react-router-dom";

const UserHome = () => {
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="navbar navbar-expand-sm bg-light navbar px-4 h-5">
        <div className="container-fluid">
          <Link className="navbar-brand" to="to">
            Dream Nest
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  About Us
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Category
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      Jeans
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Kurtas
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Suits{" "}
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex col-6 p-6">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>

            {/* <!-- wishlist --> */}
            <div>
              <Link to="#" className="m-0 text-decoration-none">
                <button type="button" className="m-0 btn position-relative">
                  {/* <i role="button" className=" cursor-pointer mdi mdi-eye" > {""} </i> */}
                </button>
                Wishlist
              </Link>
            </div>
            {/* <!-- Cart --> */}
            <div>
              <li className="nav-item dropdown " style={{ listStyle: "none" }}>
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  <i role="button" className=" cursor-pointer mdi mdi-account">
                    {" "}
                  </i>
                  Profile
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="#">
                      {" "}
                      <i
                        role="button"
                        className="mdi mdi-account  text-primary"
                      ></i>{" "}
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/">
                      <i
                        role="button"
                        className="mdi mdi-logout text-primary"
                      ></i>{" "}
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </div>
            <div>
              <Link to="#" className="m-0 text-decoration-none">
                <i role="button" className=" cursor-pointer mdi mdi-cart">
                  {" "}
                </i>{" "}
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- End of Navbar --> */}

      {/* <!-- main Section --> */}
      <div
        id="carouselExampleCaptions"
        className=" container my-2 carousel slide p-0"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/images/shirt/s1.jpeg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              <h3> Best Collections</h3>
              <h1 className="text-uppercase py-2 fw-bold">New Arrivals</h1>
              <button className="btn btn-outline-dark" type="submit">
                Shop Now
              </button>
            </div>
          </div>
          <div className="carousel-item text-center">
            <img
              src="/images/shirt/s1.jpeg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              <h3>Best Queality</h3>
              <h1 className="text-uppercase py-2 fw-bold ">New Season</h1>
              <button className="btn btn-outline-dark" type="submit">
                Shop now
              </button>
            </div>
          </div>
          <div className="carousel-item ">
            <img
              src="/images/shirt/s1.jpeg"
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block text-black">
              <h3> Best Service</h3>
              <h1 className="text-capitalize">Best Price & Offer</h1>
              <button className="btn btn-outline-dark" type="submit">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <!-- end of the main section --> */}

      {/* <!-- New arrivals products --> */}
      <section id="special" className="py-5">
        <div className="container">
          <div className="title text-center py-5">
            <h2 className="position-relative d-inline-block bg-light">
              New Arrivals
            </h2>
          </div>

          <div className="special-list row g-0">
            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt="" src="/images/Suits/s1.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <Link
                    to="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fas fa-heart"></i>
                  </Link>
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">Suits</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <Link to="#" className="btn btn-outline-dark mt-3">
                  Watch More
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt="" src="/images/Jeans/j1.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <Link
                    to="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fas fa-heart"></i>
                  </Link>
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">Jeans</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <Link to="#" className="btn btn-outline-dark mt-3">
                  Watch More
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img alt="" src="/images/shirt/s3.jpg" className="w-100" />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <Link
                    to="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fas fa-heart"></i>
                  </Link>
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">Shirt</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <Link to="#" className="btn btn-outline-dark mt-3">
                  Watch More
                </Link>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 col-xl-3 p-2">
              <div className="special-img position-relative overflow-hidden">
                <img
                  alt=""
                  src="/images/T-shirt&Shirt/t2.jpg"
                  className="w-100"
                />
                <span className="position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                  <Link
                    to="#"
                    className="text-white text-decoration-none text-muted fs-4 me-4"
                  >
                    <i className="fas fa-heart"></i>
                  </Link>
                </span>
              </div>
              <div className="text-center">
                <p className="text-capitalize mt-3 mb-1">Tshirt</p>
                <span className="fw-bold d-block">$ 45.50</span>
                <Link to="#" className="btn btn-outline-dark mt-3">
                  Watch More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end of special products -->
<!-- about --> */}
      <section>
        <div className="about_section layout_padding">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div>
                  <img
                    alt=""
                    src="/images/m1.jpg"
                    className="about_img w-75 m-4"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <h1 className=" mt-5 about_taital padding_top0">About Shop</h1>
                <div className="border"></div>
                <p className="about_text mt-10">
                  {" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti quasi quas dolore officia? Culpa eius recusandae
                  repellat repellendus nemo placeat, facere suscipit saepe
                  commodi officiis facilis amet.consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitationconsectetur
                  adipiscing{" "}
                </p>
                {/* <div className="read_bt_1"><a href="#">Read More</a></div> */}
                <div className="image_1">
                  <img
                    alt=""
                    src="/images/m2.avif"
                    className="w-50 float-end m-4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- about */}

      {/* footer start */}
      <section>
        <footer className="bg-dark py-5 mt-5">
          <div className="container">
            <div className="row text-white g-4">
              <div className="col-md-6 col-lg-3">
                <Link
                  className="text-uppercase text-decoration-none brand text-white"
                  to="#"
                >
                  Shri Ram Selection
                </Link>
                <p className="text-white text-muted mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum mollitia quisquam veniam odit cupiditate, ullam aut
                  voluptas velit dolor ipsam?
                </p>
              </div>

              <div className="col-md-6 col-lg-3">
                <h5 className="fw-light">Links</h5>
                <ul className="list-unstyled">
                  <li className="my-3">
                    <Link
                      to="#"
                      className="text-white text-decoration-none text-muted"
                    >
                      <i className="fas fa-chevron-right me-1"></i> Home
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link
                      to="#"
                      className="text-white text-decoration-none text-muted"
                    >
                      <i className="fas fa-chevron-right me-1"></i> About us
                    </Link>
                  </li>
                  <li className="my-3">
                    <Link
                      to="#"
                      className="text-white text-decoration-none text-muted"
                    >
                      <i className="fas fa-chevron-right me-1"> </i> Category
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="col-md-6 col-lg-3">
                <h5 className="fw-light mb-3">Contact Us</h5>
                <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                  <span className="me-3">
                    <i className="fas fa-map-marked-alt"></i>
                  </span>
                  <span className="fw-light">India</span>
                </div>
                <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                  <span className="me-3">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <span className="fw-light">k@gmail.com</span>
                </div>
                <div className="d-flex justify-content-start align-items-start my-2 text-muted">
                  <span className="me-3">
                    <i className="fas fa-phone-alt"></i>
                  </span>
                  <span className="fw-light">+91 98374 92738</span>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <h5 className="fw-light mb-3">Follow Us</h5>
                <div>
                  <ul className="list-unstyled d-flex">
                    <li>
                      <Link
                        to="#"
                        className="text-white text-decoration-none text-muted fs-4 me-4"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-white text-decoration-none text-muted fs-4 me-4"
                      >
                        <i className="fab fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="#"
                        className="text-white text-decoration-none text-muted fs-4 me-4"
                      >
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
      {/* end of footer */}
    </>
  );
};

export default UserHome;
