import React, { ChangeEvent, useRef, useState } from 'react';
import { Meta } from '@storybook/react';

export default {
    title: 'input',
} as Meta;

export const ControlledInputWithFixedValue = () => <input value={'Controlled input with fixed value'} />

export const UncontrolledInput = () => <input />

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    return <div>
        <input onChange={onChange} /> - {value}
    </div>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    const clickButton = () => {
        const el = inputRef.current as HTMLInputElement;
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef} />
        <button onClick={clickButton}>show</button> show value : {value}
    </div>
}