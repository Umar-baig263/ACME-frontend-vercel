import { Outlet, Navigate, Link, useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/contextProvider";
import { useEffect, useRef, useState } from "react";
import axiosClient from "../axiosClient";
// import Sidebar from "./Sidebar"; // Ensure Sidebar is Bootstrap-based
import Spinner from "./Spinner"; // Assume Spinner uses Bootstrap styling
import "./Layout.css";
import {
  MdArticle,
  MdBrandingWatermark,
  MdCategory,
  MdFormatSize,
  MdProductionQuantityLimits,
  MdExitToApp,
  MdSettings,
} from "react-icons/md";

export default function AdminLayout() {
  const { user, token, setUser, setToken } = useStateContext();
  const [isOpen, setIsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isOpenHeader, setIsOpenHeader] = useState(false);
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  // useEffect(() => {
  //   if (token) {
  //     console.log(token, "hello");
  //   }
  // }, []);
  // useEffect(() => {
  //   if (!token) {
  //     navigate("/admin");
  //     setLoading(false);
  //   }
  // }, [navigate]);
  // const onLogout = (ev) => {
  //   ev.preventDefault();
  //   axiosClient
  //     .post("/logout")
  //     .then(() => {
  //       setUser(null);
  //       setToken(null);
  //       console.log(token, user);
  //       navigate("/admin");
  //     })
  //     .catch((err) => {
  //       console.error("Error logging out:", err);
  //     });
  // };

  // const toggleDropdown = () => {
  //   setIsOpenHeader(!isOpenHeader);
  // };

  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
  //       setIsOpenHeader(false);
  //     }
  //   };
  //   document.addEventListener("mousedown", handleClickOutside);
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, []);

  // const navigateToChangePassword = () => {
  //   navigate("/admin/change-password");
  // };

  return (
    <div id="" className="">
      Admin Layout
      <div><Outlet/>
      </div>
    </div>
  );
}
