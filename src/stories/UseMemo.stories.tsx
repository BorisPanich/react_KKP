import React, { ChangeEvent, useMemo, useState } from 'react';
import { ComponentMeta, ComponentStory, Meta, Story } from '@storybook/react';

export default {
    title: 'UseMemo',
} as Meta;

export const DifficultCountingExemple = () => {
    const [a, setA] = useState<number>(4);
    const [b, setB] = useState<number>(5);

    let resultA = 1;
    let resultB = 1;

    /* Хук useMemo позволяет запоминать (и перерисовывать) значение входящей функциии, 
    если не изменились входные параметры */
    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let fake = 0;
            while (fake < 10000000) {
                fake++;
                const fakeValue = Math.random();
            }
            tempResultA *= i
        }
        return tempResultA;
    }, [a])

    for (let i = 1; i <= b; i++) { resultB = resultB * i };

    const onChangeA = (e: ChangeEvent<HTMLInputElement>) => {
        setA(+e.currentTarget.value)
    }
    const onChangeB = (e: ChangeEvent<HTMLInputElement>) => {
        setB(Number(e.currentTarget.value))
    }

    return <>
        <input value={a} onChange={onChangeA} />
        <input value={b} onChange={onChangeB} />
        <hr />
        <div>Result for a:{resultA}</div>
        <div>Result for b:{resultB}</div>
    </>

}