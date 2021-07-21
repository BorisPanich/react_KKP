import React from 'react';

export type AccordionPropsType = {
  titleValue: string
  colapsed: boolean
  onChange: () => void
}

function Accordion(props: AccordionPropsType) {

  return <div>
    <AccordionTitle title={props.titleValue}
      onChange={props.onChange} />
    {!props.colapsed && <AccordionBody />}
  </div>
}


type AccordionTitlePropsType = {
  title: string
  onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2 onClick={(e) => props.onChange()}>{props.title}</h2>
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