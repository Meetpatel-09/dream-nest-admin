// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Layout from './pages/Layout';
// import Home from './pages/Home';
// import AddUser from './pages/AddUser';
// import NoPage from './pages/NoPage';
// import ViewUsers from './pages/ViewUsers';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
// import AdminHome from './pages/admin/admin_home/admin_home';
// import EmployeeHome from './pages/employee/employee_home';
// import CustomerHome from './pages/customers/home/home';
import Category from './pages/admin/category/category';
import AdminLayout from './pages/admin/admin_layout';
import AdminHome from './pages/admin/admin_home/admin_home';
import ManageCustomers from './pages/admin/customers/ManageCustomers';
import ManageEmployee from './pages/admin/employee/manage_employee';
import ManageProduct from './pages/admin/products/manage_product';
import ManageReview from './pages/admin/review/ManageReviews';
import ManageBanner from './pages/admin/banner/ManageBanners';
import ManageContact from './pages/admin/contact/ManageContacts';
import NoPage from './pages/NoPage';
import ManageFeedback from './pages/admin/feedback/manage_feedback';
import ManageOrder from './pages/admin/order/ManageOrder';
import OTPVerification from './pages/auth/OTPVerification';
import Home from './pages/users/home/Home';
import EmployeeLayout from './pages/employee/EmployeeLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} exact={true}/>
        <Route path="/otpverification" element={<OTPVerification />} />
        <Route path="/admin/" element={<AdminLayout />} >
          <Route index element={<AdminHome />} />
          <Route path='banner' element={<ManageBanner />} />
          <Route path='category' element={<Category />} />
          <Route path='customer' element={<ManageCustomers />} />
          <Route path='employee' element={<ManageEmployee />} />
          <Route path='review' element={<ManageReview />} />
          <Route path='product' element={<ManageProduct />} />
          <Route path='contact' element={<ManageContact />} />
          <Route path='feedback' element={<ManageFeedback />} />
          <Route path='order' element={<ManageOrder />} />
        </Route>
        <Route path="/employee/" element={<EmployeeLayout />} >
          <Route index element={<ManageBanner />} />
          <Route path='banner' element={<ManageBanner />} />
          {/* <Route path='category' element={<Category />} /> */}
          {/* <Route path='customer' element={<ManageCustomers />} /> */}
          {/* <Route path='employee' element={<ManageEmployee />} /> */}
          <Route path='review' element={<ManageReview />} />
          <Route path='product' element={<ManageProduct />} />
          {/* <Route path='contact' element={<ManageContact />} /> */}
          <Route path='order' element={<ManageOrder />} />
          <Route path='feedback' element={<ManageFeedback />} />
        </Route>
        {/* <Route path="/employee_home" element={<EmployeeHome />} /> */}
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoPage />} />

        {/* <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="addUser" element={<AddUser />} />
        <Route path="viewUsers" element={<ViewUsers />} />
      </Route> */}
        {/* <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
