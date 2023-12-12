import { Navigate, Outlet } from "react-router-dom";

export default function Protected() {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/signup" />;
}
