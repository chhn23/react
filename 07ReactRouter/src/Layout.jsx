import { Outlet } from "react-router-dom";
//Outlet will help to add or change components dynamically for e.g in below scenario header and footer will be constant in all pages
//but Outlet will get updated by whatever value is passed
import Footer from "./components/Footers/Footers";
import Header from "./components/Headers/Header";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default Layout;
