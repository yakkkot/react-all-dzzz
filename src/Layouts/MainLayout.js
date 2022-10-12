import React from 'react';

import {Outlet} from "react-router-dom"
import Header from "../Components/Header";

const MainLayout = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;