import DashBoard from "@/pages/dashboard";
import Profile from "@/pages/profile";
import Register from "@/pages/register";
import Login from "@/pages/login";
import { useAppDispatch } from "@/store/hooks";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";
import { loadUser } from "../store/auth/authSlice";

const Routers = () => {
  const dispatch = useAppDispatch();
  const auth = useSelector((state) => state?.auth);
  const [isLoading, setIsLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {};
  }, [pathname]);

  useEffect(() => {
    const dataUsers = localStorage.getItem("User");

    if (dataUsers) {
      const data = JSON.parse(dataUsers);
      dispatch(loadUser(data.userInfo));
    }

    setIsLoading(false);
  }, [dispatch]);

  if (isLoading) return <div></div>;

  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:slug" element={<Profile />} />
    </Routes>
  );
};

export default Routers;
