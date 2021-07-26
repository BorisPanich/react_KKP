import React from 'react';
import { ItemsType } from '../Accordion/Accordion';

export type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {
    return (
        <div>
            {props.items.map(i => <div>{i.title}</div>)}
        </div>
    )
}