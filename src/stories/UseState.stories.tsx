import { Meta } from '@storybook/react';
import React, { useState } from 'react';

export default {
    title: 'UseState',
} as Meta;

function generetionData() {
    console.log("generetionData");
    return 372124;

}

export const Exemple1 = () => {
    console.log("UseState");

    /* метод установки значений если имеется сложный подсчет в generetionData 
    т.е. не нужно импользовать useMemo*/
    const [counter, setCounter] = useState<number>(generetionData);

    return <>
        {/* в setCounter так же можно передовать функцию, чтобы производились 
        расчеты еще в вызываемой функции setCounter, и эту ф. можно создавать 
        перед return, а setCounter вызывать с функцию действий (расчет)
        <button onClick={() => setCounter(state = state + 1)} >+</button> */}
        <button onClick={() => setCounter(counter + 1)} >+</button>
        {counter}
    </>

}