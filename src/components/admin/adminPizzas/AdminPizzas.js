import React from 'react';
import s from './AdminPizzas.module.css';
import burger from '../../data/images/pizza1.png';

const AdminPizzas = () => {
    return (
        <div className={s.elem}>
            <div className={s.burgers}>
                <div className={s.burger}>
                    <img src={burger} alt="Бургер"/>
                    <h3 className={s.title}>Пицца</h3>
                    <h4>Вкусный сочная пицца</h4>
                    <h4>Цена: 200 сом</h4>
                    <button className={s.buttonDelete}>Удалить</button>
                    <button className={s.buttonEdit}>Редактировать</button>
                </div>
            </div>
        </div>
    );
};

export default AdminPizzas;