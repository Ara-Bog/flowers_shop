import React from "react";
import { useLocation, useParams } from "react-router-dom";

function Flower() {
	let params = useParams();
    let location = useLocation();
    console.log(params)
    console.log(location)
	return <h2>Invoice: {params.flowerId}zz</h2>;
}

export default Flower;
