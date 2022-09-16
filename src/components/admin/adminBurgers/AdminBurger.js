import React from 'react';
import s from './AdminBurger.module.css';
import burger from '../../data/images/Burger1.png';
import AdminPanel from "../adminMain/adminPanel/AdminPanel";

const AdminBurger = () => {
    return (
        <div className={s.elem}>
            <AdminPanel/>
            <div className={s.burgers}>
                <div className={s.burger}>
                    <img src={burger} alt="Бургер"/>
                    <h3 className={s.title}>Бургер</h3>
                    <h4>Вкусный сочный бургер</h4>
                    <h4>Цена: 200 сом</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            </div>
        </div>
    );
};

export default AdminBurger;