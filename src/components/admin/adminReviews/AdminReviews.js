import React, {useEffect, useState} from 'react';
import s from './AdminReviews.module.css';
import api from "../../data/api";
import pen from "../../data/images/pen.svg";

const AdminReviews = () => {
    let [reviews, setReviews] = useState([]);
    const getData = () => {
        fetch(api.reviews)
            .then(response => response.json())
            .then(data => setReviews(data))
    }
    useEffect(() => {
        getData();
    }, [])
    const reviewsElement = reviews.map(item => {
        return (
            <div className={s.data} key={item.id}>
                <img className={s.pen} src={pen}/>
                <img src={item.avatar}/>
                <h3 className={s.firstName}>{item.name}</h3>
                <div className={s.desc}>{item.desc}</div>
                <div className={s.date}>{item.date}</div>
            </div>
        )
    })
    return (
        <div className={s.container}>
            {reviewsElement}
        </div>
    );
};

export default AdminReviews;