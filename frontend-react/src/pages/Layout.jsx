import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Layout = () => {
  return <>
   
    <Navbar />
    <Outlet />
    <Footer/>
  </>;
};

export default Layout;