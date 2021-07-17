import React from 'react';

function Accordion(props: any) {
    return <div>
      <AccordionTitle title={props.title} />
      <AccordionBody />
    </div>
  }
  
  function AccordionTitle(props: any) {
    return <h2>{props.title}</h2>
  }
  
  function AccordionBody() {
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