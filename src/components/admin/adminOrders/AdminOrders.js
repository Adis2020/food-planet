import React, {useEffect, useState} from 'react';
import s from './AdminOrders.module.css';
import api from '../../data/api';

const AdminOrders = () => {
    let [orders, setOrders] = useState([]);
    const getData = () => {
        fetch(api.orders)
            .then(response => response.json())
            .then(data => setOrders(data))
    }
    useEffect(() => {
        getData();
    }, [])
    let data;
    const elements = orders.map(item => {
        data = item.order
        let elem = data.map(item => {
            return(
                <div className={s.containerOrder}>
                    <img src={item.img} alt=""/>
                    <div>Название {item.title}</div>
                    <div>Количество: {item.count}</div>
                    <div>{item.price}</div>
                </div>
            )
        })
        return (
            <div className={s.order}>
                {elem}
            </div>
        )
    })
    return (
        <div className={s.container}>
            {elements}
        </div>
    );
};

export default AdminOrders;