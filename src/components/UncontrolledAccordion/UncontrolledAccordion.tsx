import React, { useState } from 'react';

export type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [colapsed, setColapsed] = useState<boolean>(false);

    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => { setColapsed(!colapsed) }} />
        {!colapsed && <AccordionBody />}
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


export default UncontrolledAccordion;