import { Children } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


import "./app.scss"
import Footer from "./componets/Footer/Footer";
import Navbar from "./componets/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";

const Layout = () => {
  return (
    <div className="app">
     <Navbar/>
      <Outlet />
     <Footer/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/products/:id",
        element: <Products/>,
      },
      {
        path: "/product/:id",
        element: <Product/>,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;