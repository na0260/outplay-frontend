import React from 'react';
import Link from "next/link";
import Event from "@/app/components/Event";

const Events = () => {
    return (
            <div className="row g-4 sequence">
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
                <Event title="MLBB SNOWSTORM SHOWDOWN" prizepool="$1200" img="./img/events/snowstorm.png" logo="./img/logos/mlbb.png"/>
            </div>
    );
};

export default Events;