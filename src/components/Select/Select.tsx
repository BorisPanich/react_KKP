import React, { useState, KeyboardEvent, useEffect } from 'react';
import { ItemsType } from '../Accordion/Accordion';
import s from './Select.module.css';

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(false);
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const selectItem = props.items.find(i => i.value === props.value);
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue);

    const toggleItems = () => setActive(!active);
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems();
    };

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {

        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendent = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];

                    if (pretendent) {
                        props.onChange(pretendent.value)
                        return;
                    }
                }
            }
            if (!selectItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === "Enter" || e.key === "Escape") {
            setActive(false);
        }
    }

    return (
        <>
            <select>
                <option value="">Belarus</option>
                <option value="">Ukraine</option>
                <option value="">Russia</option>
            </select>

            <div className={s.select} onKeyUp={onKeyUp} tabIndex={0} >
                <span className={s.main} onClick={toggleItems} >
                    {selectItem && selectItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => { setHoveredElementValue(i.value) }}
                            // onBlur={() => {toggleItems} }
                            className={s.item + " " + (hoveredItem === i ? s.selected : "")}
                            key={i.value}
                            onClick={() => { onItemClick(i.value) }}
                        >{i.title}
                        </div>)}
                    </div>
                }
            </div>
        </>
    )
}