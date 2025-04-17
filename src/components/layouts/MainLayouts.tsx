import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavBar } from "../NavBar";

export const MainLayouts = () => {
    return(
        <>
        <NavBar/>
        <Outlet/>
        <ToastContainer />

        </>
    )
} 