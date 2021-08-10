import { Meta } from '@storybook/react';
import React, { useEffect, useState } from 'react';

export default {
    title: 'UseEffect',
} as Meta;


export const SimpleExemple = () => {
    console.log("UseEffect");

    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    /* в useEffect осуществляются все side-деффекты чистой функции и 
    запускается только после выполнения return function:
    - document.title = fake.toString(); // вывод результата в заголовок страницы
    - api.getUsers().then("");  // запрос на сервер
    - setInterval;
    - indexedDB;
    - document.getElementId;
    */
    useEffect(() => {
        console.log("useEffect");
        document.title = fake.toString();
        /* при следующих зависимостях []:
        1. "отсутствие" - будет rendering каждый раз при изменении state;
        2. [] - будет rendering только один раз в начале (аналог componentDidMount);
        3. [counter] - будет rendering в начале и при каждом изменении state (count, fake);
        */
    }, [])

    return <>
        result click: {counter} --- {fake}
        <button onClick={() => setCounter(counter + 1)} >+ counter</button>
        <button onClick={() => setFake(fake + 1)} >+</button>
        {counter}
    </>

}