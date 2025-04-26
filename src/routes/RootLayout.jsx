import React from 'react';
import { Outlet } from 'react-router-dom';
import MainHeader from "../components/MainHeader.jsx";

const RootLayout = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export default RootLayout;