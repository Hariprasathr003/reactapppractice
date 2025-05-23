import "./App.css";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Rootlayout from "./layout/Rootlayout.jsx";
import Login from "./Pages/Login.jsx";
import ForgotPassword from "./Pages/ForgotPassword.jsx";
import Logout from "./Pages/Logout.jsx";
import Contactlayout from "./layout/Contactlayout.jsx";
import FormDeatils from "./component/contact/FormDeatils.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Rootlayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contactlayout />}>
        <Route path="form" element={<FormDeatils />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="forgot" element={<ForgotPassword />} />
      <Route path="Logout" element={<Logout />} />
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
