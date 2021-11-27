import propTypes from 'prop-types'
import React from 'react'
import axios from 'axios'
import Flower from './Flower';

class App extends React.Component {

	state = {
		loading: true,
		flowers: []
	};

	getFlowers = async () => {
		const {
			data: {
				flowerlist : flowers
			}
		} = await axios.get("https://gist.githubusercontent.com/sandeepcmsm/2e1f5762fa5ca351d8f129e73c730071/raw/30fb98f124445596a2a96f60a233ab13d07167d0/flowers.json");
		this.setState({flowers, loading: false})
	}	

	componentDidMount() {
		this.getFlowers()
	}

	render() {
		const {loading, flowers} = this.state
		return <div>{loading ? 'load...' : flowers.map(flower => {
			return (
			<Flower 
			key={flower.productId}
			id={flower.productId} name={flower.name} 
			category={flower.category} price={flower.price} 
			instructions={flower.instructions} />
			)
		})}</div>
	}
};

// Food.propTypes = {
// 	name: propTypes.string.isRequired
// }

// function Food({name}) {
// 	console.log(name)
// 	return (
// 		<h1>{name}i</h1>);
// }

// function App() {
// 	return (
// 		<div>
// 			<h1>zz</h1>
// 			<Food name='hu' />
// 		</div>
// 	);
// }

export default App;
