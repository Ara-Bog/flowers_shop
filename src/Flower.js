import propTypes from 'prop-types'
import React from 'react'

function Flower({id, name, category, photo, price, instructions}) {
    return <h1>{name}</h1>;
}

Flower.propTypes = {
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    category: propTypes.string,
    price: propTypes.number.isRequired,
    photo: propTypes.string,
    instructions: propTypes.string
}

export default Flower;