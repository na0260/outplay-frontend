'use client';
import React, {useEffect, useState} from "react";
import Link from 'next/link'

const Navbar = () => {
    const [showmenu, setBtnIcon] = useState(false);

    useEffect(() => {
        const header = document.getElementById("header-wrap");
        const totop = document.getElementById("scroll-to-top");
        const sticky = header.offsetTop;

        const scrollCallBack = () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                totop.classList.add("show");
            } else {
                header.classList.remove("sticky");
                totop.classList.remove("show");
            }
        };

        window.addEventListener("scroll", scrollCallBack);

        return () => {
            window.removeEventListener("scroll", scrollCallBack);
        };
    }, []);

    return (
        <nav className="navbar transition">
            <div className="container">

                {/********* Logo *********/}
                <Link className="navbar-brand" href="/">
                    <img src="./img/logo.png" className="img-fluid d-md-block d-none imginit" alt="outplay-logo"/>
                    <img src="./img/logo-mobile.png" className="img-fluid d-md-none d-sms-none imginit" alt="op-logo"/>
                </Link>
                {/********* Logo *********/}

                {/********* Mobile Menu *********/}
                <div className="mobile">
                    {showmenu &&
                        <div className='menu'>

                            <div className='navbar-item counter'>
                                <Link href="/" onClick={() => setBtnIcon(!showmenu)}>
                                    Home
                                </Link>
                            </div>

                            <div className='navbar-item counter'>
                                <Link href="/events" onClick={() => setBtnIcon(!showmenu)}>
                                    Events
                                </Link>
                            </div>

                            <div className='navbar-item counter'>
                                <Link href="/services" onClick={() => setBtnIcon(!showmenu)}>
                                    Services
                                </Link>
                            </div>
                            <div className='navbar-item counter'>
                                <Link href="/about" onClick={() => setBtnIcon(!showmenu)}>
                                    About Us
                                </Link>
                            </div>

                        </div>
                    }
                </div>
                {/********* Mobile Menu *********/}

                {/********* Dekstop Menu *********/}
                <div className="dekstop">
                    <div className='menu'>

                        <div className='navbar-item counter'>
                            <Link href="/" >
                                Home
                            </Link>
                        </div>

                        <div className='navbar-item counter'>
                            <Link href="/events" >
                                Events
                            </Link>
                        </div>

                        <div className='navbar-item counter'>
                            <Link href="/services" >
                                Services
                            </Link>
                        </div>
                        <div className='navbar-item counter'>
                            <Link href="/about" >
                                About Us
                            </Link>
                        </div>

                    </div>
                </div>
                {/********* Dekstop Menu *********/}

                {/********* Side Button *********/}
                <div className="menu_side_area">
                    <Link href="/contact" className="btn-line" id="btn-line">Contact us</Link>
                    {/********* Burger Button *********/}
                    <button className="burgermenu" type="button"
                            onClick={() => {
                                setBtnIcon(!showmenu);
                            }}>
                        <i className="fa fa-bars" aria-hidden="true"></i>
                    </button>
                    {/********* Burger Button *********/}
                </div>
                {/********* Side Button *********/}


            </div>
        </nav>
    )
}

export default Navbar;