import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Flower(props, addFlowerToBasket) {
	let params = useParams();
    let location = useLocation();
	return (
        <section className="flowerPage">
            <div className="flowerPage__block">
                <div>{props.match.params.flowerId}</div>
            </div>
        </section>
    );
}

export default Flower;
