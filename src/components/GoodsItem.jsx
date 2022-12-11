import React from 'react';

const GoodsItem = (props) => {
    const { mainId, displayName, displayDescription, price, displayAssets, addToOrder } = props
    // price is an object with regularPrice and finalPrice
    return (
        <div className="card" id={mainId}>
            <div className="card-image">
                <img src={displayAssets[0].full_background} alt={displayName} />
            </div>
            <div className="card-content">
                <span className="card-title">{displayName}</span>
                <p>{displayDescription}</p>
            </div>
            <div className="card-action">
                <button 
                className='btn' 
                onClick={() => addToOrder(
                    {
                    id: mainId, 
                    name: displayName, 
                    price: price.regularPrice }
                    )}>Купить </button>
                <span className='right' style={{fontSize: "1.8rem"}}>{price.regularPrice}руб</span>
            </div>
        </div>

    );
};

export default GoodsItem;