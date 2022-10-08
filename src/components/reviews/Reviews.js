import React, {useState, useEffect} from 'react';
import style from "./Reviews.module.css";
import pen from ".././data/images/pen.svg";
import api from "../data/api";

const Reviews = () => {
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
            <div className={style.data} key={item.id}>
                <img className={style.pen} src={pen}/>
                <img src={item.avatar}/>
                <h3 className={style.firstName}>{item.name}</h3>
                <div className={style.desc}>{item.desc}</div>
                <div className={style.date}>{item.date}</div>
            </div>
        )
    })
    return (
        <>
            <header className={style.header}>
                <div className={style.title}>Отзывы</div>
            </header>
            <div className={style.reviews}>
                {reviewsElement}
            </div>
        </>
    );
};

export default Reviews;