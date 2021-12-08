import React from 'react'
import {Link} from 'react-router-dom'

function FlowerShow({productId, name, price, onAddFlower}) {
    const imgUrl = process.env.PUBLIC_URL + "/img/itemCatalog/" + (1000000 + productId).toString().slice(1) + ".jpg"

    const onAddFlowerBasket = () => {
        const obj = {
            productId,
            name,
            price,
            imgUrl
        };
        onAddFlower({obj})
    };

    return (
    <div className="items">
        {/* <Link to={"/product/" + productId} className="items__img">
            <img src={imgUrl} alt="" />
        </Link> */}
        <div className="items__img">
            <img src={imgUrl} alt="" />
        </div>
        <div className="items__data">
            <p>{name}</p>
            <div className="price">
                <h3>{price}</h3>
                <button className="basket__add" onClick={onAddFlowerBasket}>
                    <img src={process.env.PUBLIC_URL + "/icons/basket_plus.svg"} alt="" />
                </button>
            </div>
        </div>
    </div>
    )    
}

export default FlowerShow;