import React, { useState } from 'react';

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    const [colapsed, setColapsed] = useState<boolean>(false);

    return <div>
        <AccordionTitle title={props.titleValue} />
        <button onClick={() => { setColapsed(!colapsed) }} >Toggle</button>
        {!colapsed && <AccordionBody />}
    </div>
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <div>
            <h2>{props.title}</h2>
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