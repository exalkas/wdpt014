import { useContext } from "react";
import { AppContext } from "../components/Context";
import { Outlet, Navigate } from "react-router-dom";

function ProtectedLayout(props) {
  const { state } = useContext(AppContext);

  if (state.user._id) {
    return <Outlet />;
  }

  return <Navigate to="/" />;
}

export default ProtectedLayout;
