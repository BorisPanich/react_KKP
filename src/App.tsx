import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Rating';

function App() {
  return (
    <div>
      <PageTitle title={"Project KKP"} />
      <PageTitle title={"Title 2"} />
      Article 1 Rating
      <Rating value={2} />
      <Accordion titleValue={"Menu Accordion"} colapsed={true} />
      <Accordion titleValue={"Users Accordion"} colapsed={false} />
      Article 2 Rating
      <Rating value={0} />
      <Rating value={1} />
      <Rating value={2} />
      <Rating value={3} />
      <Rating value={4} />
      <Rating value={5} />
      <Rating value={6} />
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
