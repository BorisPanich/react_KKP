import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import Rating, { RatingValueType } from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

function App() {

  const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
  const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
  const [switchOn, setSwitchOn] = useState<boolean>(false);



  return (
    <div className="app">
      <OnOff on={switchOn}
        onClick={setSwitchOn}
      />
      <UncontrolledOnOff onClick={setSwitchOn} /> {switchOn.toString()}

      <Accordion titleValue={"Controlled Accordion"}
        colapsed={accordionCollapsed}
        onChange={() => { setAccordionCollapsed(!accordionCollapsed) }}
      />
      <UncontrolledAccordion titleValue={"UnControlled Accordion"} />

      <Rating value={ratingValue} onClick={setRatingValue} />
      <UncontrolledRating />
    </div>
  );
}

type PageTitlePropsTitle = {
  title: string
}

function PageTitle(props: PageTitlePropsTitle) {
  return <h1>{props.title}</h1>
}

export default App;
