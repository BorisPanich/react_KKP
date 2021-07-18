import React from 'react';

type AccordionPropsType = {
  titleValue: string
  colapsed: boolean
}

function Accordion(props: AccordionPropsType) {

  if (props.colapsed === true) {
    return <div>
      <AccordionTitle title={props.titleValue} />
    </div>
  } else {
    return <div>
      <AccordionTitle title={props.titleValue} />
      <AccordionBody />
    </div>
  }
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