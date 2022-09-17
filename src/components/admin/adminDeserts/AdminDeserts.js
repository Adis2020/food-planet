import React from 'react';
import s from './AdminDeserts.module.css';
import sushi from '../../data/images/sushi.png';

const AdminDeserts = () => {
    return (
        <div className={s.elems}>
            <div className={s.elem}>
                <img src={sushi} alt="Изображение"/>
                <h3 className={s.title}>Десерт</h3>
                <h4>Вкусный сочные Десерт</h4>
                <h4>Цена: 200 сом</h4>
                <button className={s.buttonDelete}>Удалить</button>
                <button className={s.buttonEdit}>Редактировать</button>
            </div>
        </div>
    );
};

export default AdminDeserts;