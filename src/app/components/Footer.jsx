import React from 'react';
import Link from 'next/link'
import Image from "next/image";

const footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="row gx-5">
                    <div className="col-lg-4">
                        <img src="./img/logo.png" alt="Outplay-logo" />
                        <div className="spacer-20"></div>
                        <p>Lorem ipsum culpa tempor tempor eu laboris adipisicing sunt excepteur enim laborum officia eiusmod laborum sint do aliqua incididunt est aute deserunt in elit non sed ut velit ullamco aliquip. Nulla cupidatat elit amet sed labore ut et consequat nostrud laboris aliqua ex est fugiat quis aliqua duis quis esse dolor laboris non duis sunt.</p>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-lg-12 col-sm-12">
                                <div className="widget">
                                    <h5>Pages</h5>
                                    <ul>
                                        <li><Link href="/">About Us</Link></li>
                                        <li><Link href="/">Events</Link></li>
                                        <li><Link href="/">Services</Link></li>
                                        <li><Link href="/">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="widget">
                            <h5>Newsletter</h5>
                            <form action="blank.php" className="row form-dark" id="form_subscribe" method="post" name="form_subscribe">
                                <div className="col text-center">
                                    <input className="form-control" id="txt_subscribe" name="txt_subscribe" placeholder="enter your email" type="text" /> <Link href="/" id="btn-subscribe"><i className="arrow_right bg-color-secondary"></i></Link>
                                    <div className="clearfix"></div>
                                </div>
                            </form>
                            <div className="spacer-10"></div>
                            <small>Your email is safe with us. We don&apos;t spam.</small>
                            <div className="spacer-30"></div>
                            <div className="widget">
                                <h5>Follow Us on</h5>
                                <div className="social-icons">
                                    <Link href="/"><i className="fa-brands fa-facebook-f"></i></Link>
                                    <Link href="/"><i className="fa-brands fa-twitter"></i></Link>
                                    <Link href="/"><i className="fa-brands fa-discord"></i></Link>
                                    <Link href="/"><i className="fa-brands fa-tiktok"></i></Link>
                                    <Link href="/"><i className="fa-brands fa-youtube"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-sm-6">
                            Copyright 2024 - <Link href="#" passHref={true}>
                            N. Ahmed
                        </Link>
                        </div>
                        <div className="col-lg-6 col-sm-6 text-lg-end text-sm-start">
                            <ul className="menu-simple">
                                <li><Link href="/">Terms &amp; Conditions</Link></li>
                                <li><Link href="/">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default footer;