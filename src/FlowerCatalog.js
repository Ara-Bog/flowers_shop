import propTypes from 'prop-types'
import React from 'react'

function Flower({id, name, category, photo, price, instruction}) {
    return <div>
        <h4 className={id}>{name}</h4>
        <p>{category}</p>
        <p>{photo}</p>
        <p>{price}</p>
        <p>{instruction}</p>
    </div>;
}

Flower.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string,
    price: propTypes.number.isRequired,
    photo: propTypes.string,
    instruction: propTypes.string
}

export default Flower;