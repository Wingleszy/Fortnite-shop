import React from 'react';
import BasketItem from './BasketItem';

const BasketList = (props) => {
    const {order = [], handleBasketShow=Function.prototype, removeFromBasket=Function.prototype, incQuantity=Function.prototype, decQuantity=Function.prototype} = props

    const totalPrice = order.reduce((sum, el) => {
        return sum + el.price * el.quantity
    }, 0)

    return (
        <ul className="collection basket-list">
        <li className="collection-item active">Корзина</li>
        {
            order.length ? order.map(el => {
                return <BasketItem key={el.id} removeFromBasket={removeFromBasket} incQuantity={incQuantity} decQuantity={decQuantity}{...el}/>
            }) 
            :
            <li className="collection-item">Корзина пуста</li>
        }
        <li className="collection-item active">Общая стоимость: {totalPrice}руб <button className="secondaty-content btn-small">Оформить заказ</button></li>
            <i className='material-icons basket-close' onClick={handleBasketShow}>close</i>
      </ul>
            
    );
};

export default BasketList;