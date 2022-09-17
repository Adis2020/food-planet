import React from 'react';
import s from './AdminMain.module.css';
import data from "../../data/adminMainData";
import {Link, Outlet} from "react-router-dom";

const AdminMainElem = () => {
    return data.map((item) => {
        return (
            <Link to={item.href} className={s.box} key={item.id}>
                <h3>{item.title}</h3>
                <div>{item.count}</div>
            </Link>
        )
    })
}

const AdminMain = () => {
    return (
        <>
            <div className={s.boxes}>
                <AdminMainElem/>
            </div>
        </>
    );
};

export default AdminMain;