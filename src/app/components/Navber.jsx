'use client';
import React, {useEffect, useState} from "react";
import Link from 'next/link'

const Navbar = () => {
    const [showmenu, setBtnIcon] = useState(false);

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
                                <Link href="/">
                                    Home
                                </Link>
                            </div>

                            <div className='navbar-item counter'>
                                <Link href="/events">
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