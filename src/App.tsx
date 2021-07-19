import React from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import OnOff from './components/OnOff/OnOff';
import Rating from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';

function App() {
  return (
    <div className="app">
      {/* <PageTitle title={"Project KKP"} />
      <PageTitle title={"Title 2"} /> */}

      <OnOff />

      <Accordion titleValue={"Users Accordion"} colapsed={false} />
      <UncontrolledAccordion titleValue={"Menu Accordion"} />

      <Rating value={1} />
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
