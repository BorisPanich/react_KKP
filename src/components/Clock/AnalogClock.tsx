import React, { useEffect, useState } from 'react';
import { ClockPropsType } from './Clock';
import s from './AnalogClock.module.css'

export const AnalogClock: React.FC<ClockPropsType> = ({ date }) => {

    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };

    return (
        <div className={s.clock}>
            /* т.к. 'analog-clock' написано через "-", нужно оборачивать в [] */
            <div className={s['analog-clock']}>
                <div className={`${s.dial} ${s.seconds}`} style={secondsStyle} />
                <div className={`${s.dial} ${s.minutes}`} style={minutesStyle} />
                <div className={`${s.dial} ${s.hours}`} style={hoursStyle} />
            </div>
        </div>
    )
}