import React from 'react';
import s from './AdminRolls.module.css';
import sushi from '../../data/images/sushi.png';

const AdminRolls = () => {
    return (
        <div className={s.elems}>
            <div className={s.elem}>
                <img src={sushi} alt="Изображение"/>
                <h3 className={s.title}>Ролы</h3>
                <h4>Вкусный сочные ролы</h4>
                <h4>Цена: 200 сом</h4>
                <button className={s.buttonDelete}>Удалить</button>
                <button className={s.buttonEdit}>Редактировать</button>
            </div>
        </div>
    );
};

export default AdminRolls;