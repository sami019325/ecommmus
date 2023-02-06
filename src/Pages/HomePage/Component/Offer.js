// Offer.js

import React from 'react';
import { useState, useEffect } from 'react';

const Offer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const deadline = "February, 31, 2023";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();

        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="timer">
            <div className="flex gap-5">
                <div>
                    <span className=" font-mono text-4xl">
                        <span>{days}</span>
                    </span>
                    days
                </div>
                <div>
                    <span className=" font-mono text-4xl">
                        <span >{hours}</span>
                    </span>
                    hours
                </div>
                <div>
                    <span className=" font-mono text-4xl">
                        <span >{minutes}</span>
                    </span>
                    min
                </div>
                <div>
                    <span className=" font-mono text-4xl">
                        <span>{seconds}</span>
                    </span>
                    sec
                </div>

            </div>
        </div>
    );
};

export default Offer;