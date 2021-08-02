import React, { useReducer, useState } from 'react';
import { reducer, TOGGLE_COLLAPSED } from '../redux/uncontrolledAccordionReducer';

export type UncontrolledAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    // const [colapsed, setColapsed] = useState<boolean>(false);
    /* useReducer - callback, принимающий reducer и первоначальное значение (false в данном случаи); Испльзуется при useState >3
    или при наличии сложной логики, а не при примитивных изменениях (типа false/true);
    dispatch(отправлять) отправит в reducer (React) action и оттуда вернется colapsed с измененым значением */
    const [state, dispatch] = useReducer(reducer, { collapsed: false});

    return <div>
        {/* <AccordionTitle title={props.titleValue} onClick={() => { setColapsed(!colapsed) }} /> */}
        <AccordionTitle title={props.titleValue} onClick={() => { dispatch({ type: TOGGLE_COLLAPSED }) }} />
        {/* при значении !state.colapsed компонента отрисует то, что стоит по правую сторону от && */}
        {!state.collapsed && <AccordionBody />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2 onClick={() => { props.onClick() }} >{props.title}</h2>
        </div>
    )
}

type AccordionBodyPropsType = {

}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}
