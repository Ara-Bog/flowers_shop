import React from "react";
import FlowerItem from '../components/FlowerCatalog'

function Footer({data, onAddFlower}) {
    return (
        <section className="catalog">
            <div className="catalog_block">
			<h2>Каталог</h2>
			<div className="catalog__items">
				{data.map((obj) =>(
					<FlowerItem key={obj.productId} {...obj} onAddFlower={onAddFlower}/>
				))}
			</div>
            </div>
        </section>
    )
}

export default Footer