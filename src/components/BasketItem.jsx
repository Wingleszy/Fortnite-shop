import React from 'react';

const BasketItem = (props) => {
    const { id, name, price, quantity, removeFromBasket, incQuantity, decQuantity } = props
    return (
        <>
            <li className="collection-item">
                <div className='container-item'>
                    {name}<i className='material-icons basket-quantity' onClick={() => incQuantity(id)}>add</i>  x{quantity} <i className='material-icons basket-quantity' onClick={() => decQuantity(id)}>remove</i> = {price * quantity}руб
                </div>
                    <span className='secondary-content' onClick={() => removeFromBasket(id)}>
                        <i className='material-icons basket-delete'>close</i>
                    </span>
            </li>
        </>

    );
};

export default BasketItem;