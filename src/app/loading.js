import React from 'react';

const Loading = () => {
    return (
        <div className='preloader fadeOut'>
            <div id="de-loader">
                <div className="lds-roller">
                    {[...Array(8)].map((_, index) => (
                        <div key={index}></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Loading;