import React, { useEffect, useState } from 'react';
import { AnalogClock } from './AnalogClock';
import { DigitalClock } from './DigitalClock';

export type ClockPropsType = {
    date: Date
}

type PropsType = {
    mode?: "digital" | "analog"
}

// const get2digitsString = (num: number) => num < 10 ? "0" + num : num;

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        /* setInterval асинхронный запуск в браузере */
        const intervalId = setInterval(() => {
            console.log("tick");
            setDate(new Date())
        }, 1000)
        /* componentWillUnMount, запуск в момент отключения компоненты,
        если не прописать, то будет происходить "tick" в фоновом режиме самостоятельно */
        // return clearInterval(intervalId);
    }, []);

    
    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClock date={date} />
            break;
        case 'digital':
        default:
            view = <DigitalClock date={date} />
    }

    return <div>
        {view}
    </div>
}