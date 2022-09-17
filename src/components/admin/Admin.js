import React from 'react';
import {Outlet} from 'react-router-dom';
import AdminPanel from "./adminPanel/AdminPanel";
import AdminHeader from "./adminHeader/AdminHeader";

const Admin = () => {
    return (
        <div className="mainAdmin">
            <AdminPanel/>
            <AdminHeader/>
            <Outlet/>
        </div>
    );
};

export default Admin;