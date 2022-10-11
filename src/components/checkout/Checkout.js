import React, {useEffect, useState} from 'react';
import s from "./Checkout.module.css";
import api from "../data/api";

const Checkout = () => {
    let elem;
    let [totalPrice, setTotalPrice] = useState(0);
    const [lenght, setLenght] = useState(0);
    useEffect(() => {
        if (localStorage.basket) {
            const data = JSON.parse(localStorage.basket);
            const countArray = data.map(item => {
                return item.count;
            })
            const count = countArray.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            })
            setLenght(count);
            const priceArray = data.map(item => {
                return parseInt(item.price.replace(/\D+/g, ""));
            })
            const price = priceArray.reduce((previousValue, currentValue) => {
                return previousValue + currentValue;
            })
            setTotalPrice(price)
        }
    })
    console.log(totalPrice)
    if (localStorage.basket) {
        let getData = localStorage.getItem('basket');
        let data = JSON.parse(getData);
        elem = data.map(item => {
            return (
                <div className={s.elem} key={item.id}>
                    <img src={item.img} alt="" name="img"/>
                    <div name="title">{item.title}</div>
                    <div name="count">{item.count}</div>
                    <div name="price">{item.price}</div>
                </div>
            )
        })
    }
    const setOrder = (e) => {
        let getData = localStorage.getItem('basket');
        let order = JSON.parse(getData);
        const data = {
            name: e.currentTarget.name.value,
            surname: e.currentTarget.surname.value,
            phone: e.currentTarget.phone.value,
            email: e.currentTarget.email.value,
            adress: e.currentTarget.adress.value,
            order
        }
        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        }
        fetch(api.orders, options)
            .then(response => {
                if (response.status === 201){
                    alert('great')
                } else {
                    alert('error')
                }
            })
        console.log(data)
    }
    return (
        <form action="javascript:void(0)" onSubmit={setOrder}>
            <div className={s.checkout}>
                <div>
                    <div>
                        <h1 className={s.title}>Оформление заказа</h1>
                        <h3>Ваши контактные данные</h3>
                        <div className={s.link}>
                            <a href="#">Я новый покупатель</a>
                            <a href="#">Авторизоватся</a>
                        </div>
                        <div className={s.formData}>
                            <input type="text" placeholder="Фамилия" name="surname"/>
                            <input type="text" placeholder="Имя" name="name"/>
                            <input type="text" placeholder="Мобильный телефон: 996555555555" name="phone"/>
                            <input type="text" placeholder="Email" name="email"/>
                        </div>
                        <div>
                            <h3>Ваш заказ</h3>
                            <div className={s.names}>
                                <h5>Продукт</h5>
                                <h5 className={s.quality}>Количество</h5>
                                <h5>Цена</h5>
                            </div>
                            <div>
                                {elem}
                            </div>
                        </div>
                        <div>
                            <h3>Адрес доставки</h3>
                            <div className={s.address}>
                                <label htmlFor="Pickup"><input type="checkbox" id="Pickup"/>Самовывоз</label>
                                <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Курьерская
                                    доставка</label>
                                <select>
                                    <option>Выберите страну доставки</option>
                                    <option value="kg">Кыргызстан</option>
                                    <option value="kz">Казахстан</option>
                                    <option value="ru">Россия</option>
                                    <option value="am">Армения</option>
                                </select>
                                <input type="text" placeholder="Выберите адрес доставки" className={s.input} name="adress"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={s.movePay}>
                    <h3>Способ оплаты</h3>
                    <div className={s.pay}>
                        <label htmlFor="Pickup"><input type="checkbox" id="Pickup"/>Наличными</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Банковский перевод</label>
                        <label htmlFor="Pickup"><input type="checkbox" id="Pickup"/>Оплата картой, электронными
                            кошельками на сайте</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Денежный перевод</label>
                        <label htmlFor="delivery"><input type="checkbox" id="delivery"/>Оплата курьеру на месте</label>
                    </div>
                </div>
                <div className={s.movePay}>
                    <h3>Коментарий к заказу</h3>
                    <div className={s.pay}>
                        <textarea name="" id="" cols="30" rows="10" defaultValue="Введите ваше сообшение"></textarea>
                    </div>
                </div>
            </div>
            <div className={s.outcome}>
                <h3>Промокод</h3>
                <input type="text" defaultValue="Введите сюда промокод"/>
                <div>
                    <h3>Итого:</h3>
                    <div className={s.products}>
                        <div className={s.sum}>{lenght} товара на сумму</div>
                        <div>{totalPrice}</div>
                    </div>
                </div>
                <div className={s.total}>
                    <div>К оплате</div>
                    <div className={s.price}>{totalPrice} сом</div>
                </div>
                <div className={s.moveButton}>
                    <button className={s.button} type={"submit"}>Подтвердить заказ</button>
                </div>
            </div>
        </form>
    );
};

export default Checkout;