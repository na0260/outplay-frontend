import React from 'react';
import Link from "next/link";
import Event from "@/app/components/Event";

const Events = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="subtitle mb20">Most recent works</div>
                    <h2 className="wow fadeInUp">Portfolio</h2>
                    <div className="spacer-20"></div>
                </div>
                <div className="col-lg-6 text-lg-end">
                    <Link className="btn-main mb-sm-30" href="/events">View all events</Link>
                </div>
            </div>
            <div className="row g-4 sequence">
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
            </div>

        </div>
    );
};

export default Events;