import React from "react";
import {Link} from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import Modal from './Modal'

function Nav() {
    return  <section className="header">
    <div className="menu">
        <div className="menu__left-side">
            <div className="logo">
                <Link to="/">
                    <img src={process.env.PUBLIC_URL +"/icons/logo.svg"} alt="" />
                </Link>
            </div>
            <div className="navigation">
                <div className="navigation_link">
                    <HashLink to="/#about">О нас</HashLink>
                    <Link to="/catalog">Каталог</Link>
                    <HashLink to="/#contact">Контакты</HashLink>
                    <p className="time_work">Время работы: <span>10:00 — 23:00</span></p>
                </div>
            </div>
        </div>
        <div className="menu__right-side">
            <div className="call_phone">
                <a href="tel:8 (908) 999-16-25" className="feedback_number">
                    <img src={process.env.PUBLIC_URL +"/icons/phone.svg"} alt="phone" /><p>+7 (908) 999-16-25</p>
                </a>
            </div>
            <Modal />
            <div className="burger">
                <img id="burger" src={process.env.PUBLIC_URL +"/icons/burger.svg"} alt="burger" />
                <img id="cross" src={process.env.PUBLIC_URL +"/icons/cross.svg"} alt="cross" />
            </div>
        </div>
    </div>
    </section>
}

export default Nav;