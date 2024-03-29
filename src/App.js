import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AllProducts from "./Pages/AllProducts/AllProducts";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Footer from "./Pages/SharedPage/Footer/Footer";
import Navebar from "./Pages/SharedPage/Navebar/Navebar";
import NotFound404 from "./Pages/SharedPage/NotFound404/NotFound404";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div className="App">
      <Navebar></Navebar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        {/* <Route
          path="/productdetails/:productdetailsId"
          element={<ProductDetails></ProductDetails>}
        ></Route> */}
        <Route
          path="/productdetails/:productdetailsId"
          element={
            <RequireAuth>
              <ProductDetails></ProductDetails>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/allproducts"
          element={
            <RequireAuth>
              <AllProducts></AllProducts>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<SignIn></SignIn>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        <Route path="*" element={<NotFound404></NotFound404>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
