import React, { useEffect, useState } from 'react';
import { ClockPropsType } from './Clock';


export const get2digitsString = (num: number) => num < 10 ? "0" + num : num;

export const DigitalClock: React.FC<ClockPropsType> = ({ date }) => {

    return <div>
        <span>{get2digitsString(date.getHours())}</span>
        :
        <span>{get2digitsString(date.getMinutes())}</span>
        :
        <span>{get2digitsString(date.getSeconds())}</span>
    </div>
}