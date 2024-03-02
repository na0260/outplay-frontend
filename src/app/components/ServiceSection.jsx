import React from 'react';

const ServiceSection = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                    <div className="subtitle mb-3">WHAT DO WE DO?</div>
                    <h2 className="mb20">Our Services</h2>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/1.png" className="mb20" alt=""/>
                        <h4>GAMING & E-SPORTS EVENTS</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat
                            duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/2.png" className="mb20" alt=""/>
                        <h4>E-SPORTS BROADCASTING</h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat
                            duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/3.png" className="mb20" alt=""/>
                        <h4>TALENT MANAGEMENT </h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat
                            duis dolor in.</p>
                    </div>
                </div>

                <div className="col-lg-3 col-md-6 mb-sm-20">
                    <div>
                        <img src="./img/icons/4.png" className="mb20" alt=""/>
                        <h4 className="text-uppercase">Sponsorships & Brand Integrations </h4>
                        <p>Dolor minim in pariatur in deserunt laboris eu pariatur labore excepteur cupidatat cupidatat
                            duis dolor in.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSection;