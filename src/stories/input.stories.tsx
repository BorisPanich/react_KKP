import React, { ChangeEvent, useRef, useState } from 'react';
import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Checkbox, Select, TextField } from '@material-ui/core';

export default {
    title: 'input',
} as Meta;

const callbackAction = action('event fired');

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('');
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)
    }
    // return <input value={parentValue} onChange={onChange} />
    return <TextField value={parentValue} onChange={onChange} />
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(false);
    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.checked)
    }
    // return <input type='checkbox' checked={parentValue} onChange={onChange} />
    return <Checkbox
        checked={parentValue}
        onChange={onChange}
        color='primary'
    />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined);
    const onChange = (e: any) => {
        setParentValue(e.currentTarget.value)
    }
    return <Select value={parentValue} onChange={onChange} >
        <option>none</option>
        <option value="1">Lida</option>
        <option value="2">Grodno</option>
        <option value="3">Mensk</option>
    </Select>
}