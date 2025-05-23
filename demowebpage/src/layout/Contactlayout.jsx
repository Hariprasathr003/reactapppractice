import { Outlet } from "react-router-dom";
import Contact from "../Pages/Contact.jsx";
const Contactlayout = () => {
  return (
    <>
      <Contact />
      <Outlet />
    </>
  );
};

export default Contactlayout;
