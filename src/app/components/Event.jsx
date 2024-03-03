import React from 'react';
const Event = (props) => {
    const logoStyle = {
        background: 'transparent',
        padding: '0',
    };
    return (
        <div className="col-lg-3 col-md-4 col-sm-12 gallery-item">
            <div className="de-item wow">
                <div className="d-overlay">
                    <div className="d-text">
                        <h4 className="pb-2">{props.title}</h4>
                        <p className="d-price">Prizepool <span className="price">{props.prizepool}</span></p>
                        <button className="btn-main" style={logoStyle}>
                            <img src={props.logo}/>
                        </button>
                    </div>
                </div>
                <img src={props.img} className="img-fluid " alt={props.title}/>
            </div>
        </div>
    );
};

export default Event;