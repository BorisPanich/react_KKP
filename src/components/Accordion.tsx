import React from 'react';

type AccordionPropsType = {
  titleValue: string
  colapsed: boolean
}

function Accordion(props: AccordionPropsType) {

    return <div>
      <AccordionTitle title={props.titleValue} />
      { !props.colapsed && <AccordionBody />}
    </div>
  }


type AccordionTitlePropsType = {
  title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2>{props.title}</h2>
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


export default Accordion;