'use client';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from "@/app/components/Navber";
import Footer from "@/app/components/Footer";
import HeroSection from "@/app/components/HeroSection";
import ServiceSection from "@/app/components/ServiceSection";

export default function Home() {
    return (
        <HelmetProvider>
            <header id="header-wrap">
                <Navbar/>
            </header>
            <section className="no-padding">
                <HeroSection/>
            </section>
            <section className="no-bottom tex-center">
                <ServiceSection/>
            </section>
                <Footer/>
        </HelmetProvider>
);
}
