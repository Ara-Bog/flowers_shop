import React from "react";
import {Link} from "react-router-dom";

function Footer() {
    return (
        <section className="footer">
            <div className="footer_block">
                <div className="logo">
                    <Link to="/">
                        <img src={process.env.PUBLIC_URL +"/icons/logo.svg"} alt="" />
                    </Link>
                    <p>© Copyright 2020 «БУКЕТ.МАРКЕТ» <br /> Все права защищены</p>
                </div>
                <div className="footer_contact">
                    <p>
                        Сделано с любовью в <a className="studio" href="https://3387studio.ru/">33/87 STUDIO</a>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Footer