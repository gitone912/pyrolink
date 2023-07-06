import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbarx from "../components/Navbar";
import Footer from "../components/footer";

const Layout = () => {
  return <>
   
    <Navbarx />
    <br></br>
    <Outlet />
    
    <Footer/>
  </>;
};

export default Layout;