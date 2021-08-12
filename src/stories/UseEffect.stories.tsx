import { Meta } from '@storybook/react';
import React, { useEffect, useState } from 'react';
import { clearTimeout } from 'timers';

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
        <div> result click: {counter}
            <button onClick={() => setCounter(counter + 1)} > + counter</button>
        </div>
        <div>
            result click:{fake}
            <button onClick={() => setFake(fake + 1)} > + fake</button>
        </div>
    </>

}

export const SetTimeoutSetIntervalExemple = () => {
    console.log("SetTimeoutSetIntervalExemple");

    const [counter, setCounter] = useState<number>(1);
    const [fake, setFake] = useState<number>(1);

    /* setTimeout */
    useEffect(() => {
        console.log("useEffect SetTimeoutExemple");
        const timeoutId = setTimeout(() => {
            console.log("setTimeout");
            document.title = fake.toString();
        }, 1000)

        return () => {
            clearTimeout(timeoutId)
        }
    }, [counter])

    /* setInterval */
    useEffect(() => {
        console.log("useEffect SetIntervalExemple");
        const intervalId = setInterval(() => {
            console.log("setInterval");
            setCounter(state => state + 1);
        }, 1000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <>
        <div> result click: {counter}
            <button onClick={() => setCounter(counter + 1)} > + counter</button>
        </div>
        <div>
            result click:{fake}
            <button onClick={() => setFake(fake + 1)} > + fake</button>
        </div>
    </>
}

export const ResetEffectExemple = () => {

    const [counter, setCounter] = useState<number>(1);

    console.log("ResetEffectExemple" + counter);

    useEffect(() => {
        console.log("useEffect occurred" + counter);

        /* происходит зачистка (обновление) */
        return () => {
            console.log("reset effect" + counter);
        }
    }, [counter]);

    const increase = () => {
        return () => setCounter(counter + 1)
    }

    return <>
        <div> result click: {counter}
            <button onClick={increase} > + counter</button>
        </div>
    </>
}

export const KeyTrackerExemple = () => {

    const [text, setText] = useState<string>("");

    console.log("KeyTrackerExemple" + text);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            console.log(e.key);
            setText(text + e.key)
        }
        window.addEventListener("keypress", handler)

        /* необходимо провести зачистку, чтобы не перезапускалось самостоятельно (ComponentWillUnMount) */
        return () => {
            window.removeEventListener("keypress", handler)
        }
    }, [text]);

    return <>
        result: {text}
    </>
}