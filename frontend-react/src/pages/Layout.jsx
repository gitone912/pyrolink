import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";


const Layout = () => {
  return <>
    <CssBaseline />
    <Outlet />
  </>
};

export default Layout;
