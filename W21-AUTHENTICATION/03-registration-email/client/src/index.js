import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
// import App from "./App";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ContextProvider from "./components/Context";
import EmailConfirm from "./pages/EmailConfirm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route element={<LoginLayout />}> */}
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* </Route> */}
        <Route path="/profile" element={<Profile />} />
        <Route path="/emailconfirm/:token" element={<EmailConfirm />} />

        {/* <Route element={<UserLayout />}> */}
        {/* <Route path='/dashboard' element={<Posts />}/>
         */}
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  </ContextProvider>
);
