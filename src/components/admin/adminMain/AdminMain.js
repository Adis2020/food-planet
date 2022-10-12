import React, {useState} from 'react';
import s from './AdminMain.module.css';
import api from '../../data/api';
import data from '../../data/adminMainData';
import {Link} from 'react-router-dom';

const AdminMainElem = (props) => {
    const [lenght, setLenght] = useState(0);
    fetch(api[props.idName])
        .then(response => response.json())
        .then(data => setLenght(data.length))
    console.log(lenght)
    return (
        <Link to={props.href} className={s.box}>
            <h3>{props.title}</h3>
            <div>{lenght}</div>
        </Link>
    )
}

const AdminMain = () => {
    const elem = data.map(item => {
        return <AdminMainElem
            key={item.id}
            id={item.id}
            idName={item.idName}
            href={item.href}
            title={item.title}
            count={item.count}
        />
    })
    return (
        <div className={s.boxes}>
            {elem}
        </div>
    );
};

export default AdminMain;