"use client";
import React, {useCallback, useEffect, useState} from 'react';
import BusinessPartnerLogo from "@/app/components/BusinessPartnerLogo";

const BusinessPartners = () => {
    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col-lg-12">
                        <div className="subtitle fadeInUp mb-3">Our Valuable</div>
                    </div>
                    <div className="col-lg-12">
                        <h2 className="fadeInUp mb20">Clients & Business Partners</h2>
                    </div>
                    <div className="spacer-10"></div>
                </div>
            </div>
            <div className="no-bottom wow fadeInRight d-flex z-1000">
                <div className="de-marquee-list wow">
                    <div className="d-item">
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                    </div>
                    <div className="d-item">
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                        <BusinessPartnerLogo logo="./img/logos/mlbb.png"/>
                    </div>

                </div>
            </div>
        </>
    );
};

export default BusinessPartners;