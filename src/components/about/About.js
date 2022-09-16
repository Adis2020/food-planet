import React from 'react';
import style from "./About.module.css";
import data from ".././data/aboutData";

const About = () => {
    const aboutElem = data.map((item, index) => {
        return (
            <div className={style.data} key={index}>
                <img src={item.img}/>
                <h3 className={style.firstName}>{item.title}</h3>
                <div className={style.desc}>{item.desc}</div>
            </div>
        )
    })
    return (
        <>
            <header className={style.header}>
                <h2 className={style.title}>Почему выбирают нас:</h2>
            </header>
            <div className={style.aboutData}>
                {aboutElem}
            </div>
        </>
    );
};

export default About;