import React from 'react';

export type ItemsType = {
  title: string
  value: any
}

export type AccordionPropsType = {
  titleValue: string
  colapsed: boolean
  /** onChange that is called when any clicked @param value is value of clicked item */
  onChange: () => void
  /** color of header text */
  color?: string
  items: ItemsType[]
  onClick: (value: any) => void
}

export function Accordion(props: AccordionPropsType) {

  return <div>
    <AccordionTitle title={props.titleValue}
      onChange={props.onChange}
      color={props.color} />
    {!props.colapsed && <AccordionBody items={props.items} onClick={props.onClick} />}
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
  items: ItemsType[]
  onClick: (value: any) => void
}

function AccordionBody(props: AccordionBodyPropsType) {
  return (
    <ul>
      {props.items.map((i, index) => <li key={index} onClick={() => props.onClick(i.value)} >{i.title}</li>)}
    </ul>
  )
}
