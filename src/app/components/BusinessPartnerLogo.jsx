import React from 'react';

const BusinessPartnerLogo = (props) => {
    return (
        <>
            <span className="d-item-txt">
                <img height="70" width="100" src={props.logo}/>
            </span>
            <span className="d-item-display">
                <i className="d-item-block"></i>
              </span>
        </>
    );
};

export default BusinessPartnerLogo;