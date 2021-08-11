import React, { useEffect, useState } from 'react';

type ClockPropsType = {

}

const get2digitsString = (num: number) => num < 10 ? "0" + num : num;

export const Clock: React.FC<ClockPropsType> = (props) => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        /* setInterval асинхронный запуск в браузере */
        const intervalId = setInterval(() => {
            console.log("tick");
            setDate(new Date())
        }, 1000)
        /* componentWillUnMount, запуск в момент отключения компоненты,
        если не прописать, то будет происходить "tick" в фоновом режиме самостоятельно */
        return clearInterval(intervalId);
    }, []);

    const hoursString = get2digitsString(date.getHours());
    const minutesString = get2digitsString(date.getMinutes());
    const secondsString = get2digitsString(date.getSeconds());

    return <div>
        <span>{hoursString}</span>
        :
        <span>{minutesString}</span>
        :
        <span>{secondsString}</span>
    </div>
}