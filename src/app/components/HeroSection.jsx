"use client";
import React from 'react';
import {Parallax} from 'react-parallax';
import Link from 'next/link'


const Section = () => {
    const videoId = 'QB2DfxkaBeU';
    return (
        <Parallax className="home-video">
            <div className="iframeyoutube">
                <video width="100%" height="100%" src="./video/video.mp4"
                       preload="auto"
                       controls={false}
                       disablePictureInPicture={true}
                       autoPlay={true} muted={true}
                       loop={true}>
                </video>
            </div>

            <div className="de-gradient-edge-top"></div>
            <div className="de-gradient-edge-bottom"></div>
            <div className="overlay-bg t50 no-top no-bottom">
                <div className="v-center">
                    <div className="container z-1000">
                        <div className="row align-items-center">
                            <div className="col-lg-10 offset-lg-1 text-center">
                                <h1 className="mb-0">
                                    Welcome to OutPlay
                                </h1>

                            </div>
                            <div className="col-lg-6 offset-lg-3 text-center text-white">
                                <p className="">Aute velit non excepteur in eiusmod proident aute qui ullamco incididunt
                                    aliqua aliqua velit cillum deserunt dolore consectetur excepteur magna dolor enim
                                    voluptate dolore irure nulla culpa sint nulla do.</p>
                                {/*<Link className="btn-main" href="/">Compare Our Plans</Link>*/}

                                <div className="spacer-single"></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Parallax>
    );
}

export default Section;