import React from 'react';

export type AccordionPropsType = {
  titleValue: string
  colapsed: boolean
  /**
   * onChange that is called when any clicked
   * @param value is value of clicked item
   */
  onChange: () => void
  /**
   * color of header text
   */
  color?: string
}

export function Accordion(props: AccordionPropsType) {

  return <div>
    <AccordionTitle title={props.titleValue}
      onChange={props.onChange}
      color={props.color} />
    {!props.colapsed && <AccordionBody />}
  </div>
}


type AccordionTitlePropsType = {
  title: string
  onChange: () => void
  color?: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
  return <h2
    style={{ color: props.color ? props.color : "black" }}
    onClick={(e) => props.onChange()}>{props.title}</h2>
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
