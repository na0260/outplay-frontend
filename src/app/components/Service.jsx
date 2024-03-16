import React from 'react';

const Service = (props) => {
    return (
        <>
            <div className="col-lg-4 mb30">
                <div className="de-step-s1">
                    <div className="d-number">{props.id}</div>
                    <h4>{props.title}</h4>
                    <p className="">{props.desc}</p>
                </div>
            </div>
        </>
    );
};

export default Service;