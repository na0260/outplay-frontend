import React from 'react';
import GalleryImage from "@/app/components/GalleryImage";

const Gallery = () => {
    return (
        <>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 offset-lg-3 text-center">
                        <div className="subtitle wow fadeInUp mb-3">Latest From Us</div>
                        <h2 className="wow fadeInUp" data-wow-delay=".2s">Team Gallery</h2>
                        <div className="spacer-20"></div>
                    </div>
                </div>
                <div className="row g-4">
                    <GalleryImage image="./img/gallery/1.jpg" name="MLBB Snowstorm Showdown"/>
                    <GalleryImage image="./img/gallery/2.jpg" name="MLBB Snowstorm Showdown"/>
                    <GalleryImage image="./img/gallery/3.jpg" name="MLBB Snowstorm Showdown"/>
                    <GalleryImage image="./img/gallery/1.jpg" name="MLBB Snowstorm Showdown"/>
                    <GalleryImage image="./img/gallery/2.jpg" name="MLBB Snowstorm Showdown"/>
                    <GalleryImage image="./img/gallery/3.jpg" name="MLBB Snowstorm Showdown"/>
                </div>
            </div>
        </>
    );
};

export default Gallery;