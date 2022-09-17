import React from 'react';
import {Link} from "react-router-dom";
import s from './AdminPanel.module.css';
import logo from '../.././data/icons/logo.svg';
import data from "../.././data/adminPanelData";

const AdminPanelElem = () => {
    return data.map((item) => {
        return (
            <Link
                to={item.href}
                className={s.elem}
                key={item.id}
            >
                <img src={item.img} alt="menu"/>
                <h3>{item.text}</h3>
            </Link>
        )
    })
}

const AdminPanel = () => {
    return (
        <div>
            <div className={s.panel}>
                <div className={s.logo}>
                    <img src={logo} alt="logo"/>
                    <h3>FOOD PLANET</h3>
                </div>
                <AdminPanelElem/>
            </div>
        </div>
    );
};

export default AdminPanel;