'use client';
import Navbar from "@/app/components/Navber";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import ServiceSection from "@/app/components/ServiceSection";
import {Parallax} from "react-parallax";
import Events from "@/app/components/Events";
import BusinessPartners from "@/app/components/BusinessPartners";
import Gallery from "@/app/components/Gallery";

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
                        <Events/>
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
    )
        ;
}
