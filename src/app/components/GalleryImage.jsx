import React from 'react';

const GalleryImage = (props) => {
    return (
        <>
            <div className="col-lg-3 col-md-4 col-sm-6 mb10">
                <div className="bloglist item">
                    <div className="post-content">
                        <div className="post-image">
                            <div className="d-tagline">
                                <span>{props.name}</span>
                            </div>
                            <img src={props.image} alt="outplay-team"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GalleryImage;