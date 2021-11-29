import React from 'react'
import {Link} from "react-router-dom";
import FlowerItem from '../components/FlowerCatalog'

function Home({favorite, onAddFlower}) {
	return <>
	<section className="main_page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/img/bg_main_page.jpg)`}}>
		<div className="main_page__block">
			<h1>Продажа букетов <br/> с доставкой по городу</h1>
			<p>БУКЕТ.МАРКЕТ - бесплатная доставка цветов, букетов во Владивостоке - заказ, самовывоз</p>
			<div>
				<Link className="button__catalog" to="/catalog">Каталог букетов</Link>
			</div>
		</div>
	</section>
	<section className="about" id="about">
		<div className="about_block">
			<h2>О Нас</h2>
			<div className="about_block__text">
				<p>Агентство недвижимости «Милана» – ваш надежный партнер при продаже и покупке квартиры в городе Владивосток. <br /> Наша специализация – реализация масштабных проектов на рынке Владивостока. Мы работаем только с надежными застройщиками, реализуем проверенные объекты по законным схемам.</p>
			</div>
			<div>
				<img src={process.env.PUBLIC_URL + "/img/about.jpg"} alt="" />
			</div>
		</div>
	</section>
	<section className="catalogSmall">
		<div className="catalogSmall_block">
			<h2>Популярные букеты</h2>
			<div className="catalogSmall__items">
				{favorite.map((obj) =>(
					<FlowerItem key={obj.productId} {...obj} onAddFlower={onAddFlower}/>
				))}
			</div>
		</div>
	</section>
	<section className="advantage">
		<div className="advantage_block">
			<h2>Преимущество</h2>
			<div className="advantage__items">
				<div className="item_ang">
					<img src={process.env.PUBLIC_URL + "/icons/diamond.svg"} alt=""/>
					<p>Гарантируем качество и свежесть</p>
				</div>
				<div className="item_ang">
					<img src={process.env.PUBLIC_URL + "/icons/car.svg"} alt="" />
					<p>Гарантируем качество и свежесть</p>
				</div>
				<div className="item_ang">
					<img src={process.env.PUBLIC_URL + "/icons/ruble.svg"} alt="" />
					<p>Гарантируем качество и свежесть</p>
				</div>
				<div className="item_ang">
					<img src={process.env.PUBLIC_URL + "/icons/clock.svg"} alt="" />
					<p>Гарантируем качество и свежесть</p>
				</div>
			</div>
		</div>
	</section>
	<section className="contact" id="contact">
		<div className="contact_block">
			<h2>Контакты</h2>
			<div>
				<div className="contact_item">
					<div>
						<h4>Адрес:</h4>
						<a href="https://yandex.ru/maps/-/CKSLiK-j">г.Владивосток, ул. Алеутская, 26</a>
						<h4>Номер телефона:</h4>
						<a href="tel:8 (800) 7-752-010">8 (800) 775-20-10</a>
						<h4>Почта:</h4>
						<a href="mailto:buket.market@gmail.com">buket.market@gmail.com</a>
						<h4>Время работы:</h4>
						<p>10:00 — 23:00</p>
					</div>
				</div>
				<div id="map">
					<img src={process.env.PUBLIC_URL + "/img/map.jpg"} alt=""/>
				</div>
			</div>
		</div>
	</section>

	</>
}


export default Home;
