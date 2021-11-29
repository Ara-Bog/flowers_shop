import React from 'react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import Flower from './routes/Flower';
import Home from './routes/Home';
import NotFound from './routes/NotFound';
import Nav from './components/Nav';
import Catalog from './routes/Catalog';
import Modal from './components/Modal';
import Footer from './components/Footer';
import Base from './db.json';
import {setFlowers} from './redux/actions/flowers'
import { useSelector, useDispatch } from 'react-redux';
import { addFlowerBasket } from './redux/actions/basket'

function Sections() {
	const dispatch = useDispatch();
	const storage = useSelector(({flowers}) => flowers.items);

	React.useEffect(() => {
		const {
			flowerlist : flowers
		} =  Base;
		dispatch(setFlowers(flowers));
	});

	const addFlowerToBasket = obj => {
		dispatch(addFlowerBasket(obj));
	}

	return(
		<HashRouter>
			<Nav/>
			<Routes>
				<Route path="/" element={<Home favorite={storage.slice(0, 4)} onAddFlower={addFlowerToBasket}/>}/>
				<Route path="/catalog" element={<Catalog data={storage}  onAddFlower={addFlowerToBasket}/>}/>
				<Route path="/product" element={<Flower />}> 
					<Route path=":flowerId" element={<Flower />}/>
				</Route>
				<Route path="/basket" element={<Modal />}/>
				<Route element={<NotFound/>}/>
			</Routes>
			<Footer/>
		</HashRouter>
	)
}

export default Sections;
