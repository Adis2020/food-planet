import React from 'react';
import s from './AdminSalats.module.css';
import sushi from '../../data/images/sushi.png';

const AdminSalats = () => {
    return (
        <div className={s.elems}>
            <div className={s.elem}>
                <img src={sushi} alt="Изображение"/>
                <h3 className={s.title}>Салаты</h3>
                <h4>Вкусный сочные салаты</h4>
                <h4>Цена: 200 сом</h4>
                <button className={s.buttonDelete}>Удалить</button>
                <button className={s.buttonEdit}>Редактировать</button>
            </div>
        </div>
    );
};

export default AdminSalats;