'use client';
import React from 'react';
import Navbar from "@/app/components/Navber";
import Footer from "@/app/components/Footer";
import Events from "@/app/components/Events";
import {Parallax} from "react-parallax";

const bg = "./img/events-bg.webp";
const Page = () => {
    return (
        <>
            <div className="home dark-scheme">
                <header id="header-wrap">
                    <Navbar/>
                </header>
                <Parallax className="" bgImage={bg} strength={300}>
                    <div className="de-gradient-edge-top"></div>
                    <div className="de-gradient-edge-bottom"></div>
                    <section className="no-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="subtitle mb20">Completed Events</div>
                                    <h2 className="wow fadeInUp">Event Collection</h2>
                                    <div className="spacer-20"></div>
                                </div>
                            </div>
                            <Events/>
                        </div>
                    </section>
                </Parallax>
                <Footer/>
            </div>
        </>
    );
};

export default Page;