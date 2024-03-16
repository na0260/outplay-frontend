'use client';
import React from 'react';
import Navbar from "@/app/components/Navber";
import {Parallax} from "react-parallax";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import css from "@/app/assets/css/custom.css"
import Service from "@/app/components/Service";

const bg = "./img/service-bg.webp";

const data = [
    {
        "title": 'GAMING & E-SPORTS EVENTS',
        "desc": 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat\n' +
            '                            duis dolor in.'
    },
    {
        "title": 'E-SPORTS BROADCASTING',
        "desc": 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat\n' +
            '                            duis dolor in.'
    },
    {
        "title": 'TALENT MANAGEMENT',
        "desc": 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat\n' +
            '                            duis dolor in.'
    },
    {
        "title": 'Sponsorships & Brand Integrations',
        "desc": 'Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat\n' +
            '                            duis dolor in.'
    },

]

const Page = () => {
    return (
        <>
            <div className="home dark-scheme">
                <header id="header-wrap">
                    <Navbar/>
                </header>
                <Parallax className="" bgImage={bg} strength={300}>
                    <section className="no-bg">
                        <div className="container z-9">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="subtitle wow fadeInUp mb-3">Our Services</div>
                                </div>
                                <div className="col-lg-6">
                                    <h2>We Provide</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                </Parallax>
                <section>
                    <div className="container">
                        <div className="row row-flex">
                            {data.map((service, index) =>
                                <Service id={index + 1} title={service.title} desc={service.desc}/>
                            )}
                        </div>

                        <div className="col-lg-12 text-center">
                            <Link href="/contact" className="btn-main btn-lg" to="/">Contact Today</Link>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
};

export default Page;