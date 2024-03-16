'use client';
import Navbar from "@/app/components/Navber";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import ServiceSection from "@/app/components/ServiceSection";
import {Parallax} from "react-parallax";
import Events from "@/app/components/Events";
import BusinessPartners from "@/app/components/BusinessPartners";
import Gallery from "@/app/components/Gallery";
import Link from "next/link";
import React from "react";

const bg = "./img/events-bg.webp";

export default function Home() {
    return (
        <>
            <div className="home dark-scheme">
                <header id="header-wrap">
                    <Navbar/>
                </header>

                <section className="no-padding">
                    <HeroSection/>
                </section>

                <section className="no-bottom tex-center">
                    <ServiceSection/>
                </section>

                <Parallax className="" bgImage={bg} strength={300}>
                    <div className="de-gradient-edge-top"></div>
                    <div className="de-gradient-edge-bottom"></div>
                    <section className="no-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="subtitle mb20">Most recent works</div>
                                    <h2 className="wow fadeInUp">Portfolio</h2>
                                    <div className="spacer-20"></div>
                                </div>
                                <div className="col-lg-6 text-lg-end">
                                    <Link className="btn-main mb-sm-30" href="/events">View all events</Link>
                                </div>
                            </div>
                            <Events/>
                        </div>
                    </section>
                </Parallax>

                <section className="no-bottom">
                    <BusinessPartners/>
                </section>

                <section>
                    <Gallery/>
                </section>

                <Footer/>
            </div>
        </>
);
}
