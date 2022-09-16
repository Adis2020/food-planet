import React from 'react';
import style from "./Reviews.module.css";
import reviewsData from ".././data/reviewsData";
import pen from ".././data/images/pen.svg";

const Reviews = () => {
    const reviewsElement = reviewsData.map((item, index) => {
        return (
            <div className={style.data} key={index}>
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