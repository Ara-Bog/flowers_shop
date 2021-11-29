import React from 'react'
import {Link} from 'react-router-dom'

function FlowerBasket({productId, name, price, imgUrl, itemsCount, onRemove, onPlusItem, onMinusItem}) {
    const handleRemoveClick = () => {
        onRemove(productId, name)
    }

    const handlePlusItem = () => {
        onPlusItem(productId)
    }

    const handleMinusItem = () => {
        onMinusItem(productId)
    }
    
    return (
    <div className="basket__content_item">
        <div className="basket__content_item__image">
            <img src={imgUrl} alt="" />
        </div>
        <div className="price">
            <p>{name}</p>
            <h3>{price}</h3>
        </div>
        <div className="count">
            <button onClick={handlePlusItem} className="count--up"></button>
            <p>{itemsCount}</p>
            <button onClick={handleMinusItem} className="count--down"></button>
        </div>
        <button onClick={handleRemoveClick} className="trash_box">
            <img src={process.env.PUBLIC_URL +"/icons/trash.svg"} alt="" />
        </button>
    </div>
    )    
}

export default FlowerBasket;