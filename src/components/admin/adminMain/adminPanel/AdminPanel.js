import React from 'react';
import s from './AdminPanel.module.css';
import logo from '../../../data/icons/logo.svg';
import data from "../../../data/adminPanelData";

const AdminPanelElem = () => {
    return data.map((item) => {
        return (
            <button
                className={s.elem}
                key={item.id}
            >
                <img src={item.img} alt="menu"/>
                <h3>{item.text}</h3>
            </button>
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