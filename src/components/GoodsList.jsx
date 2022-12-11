import React from 'react';
import GoodsItem from './GoodsItem';

const GoodsList = (props) => {
    const {goods = []} = props
    if (!goods.length) {
      return <h3>Nothing Found</h3> 
    }

    return (
        <div className='goods'>
            {goods.map(good => {
                return <GoodsItem key={good.mainId} addToOrder={props.addToOrder} {...good}/>
            })}
        </div>
    );
};

export default GoodsList;