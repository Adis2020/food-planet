import React from 'react';
import s from './Admin.module.css'
import {Outlet} from 'react-router-dom';
import AdminPanel from './adminPanel/AdminPanel';
import AdminHeader from './adminHeader/AdminHeader';

const Admin = () => {
    return (
        <div className={s.mainAdmin}>
            <AdminPanel/>
            <div className={s.content}>
                <AdminHeader/>
                <Outlet/>
            </div>
        </div>
    );
};

export default Admin;