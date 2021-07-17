import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Rating from './components/Raiting';

function App() {
  return (
    <div>
      <PageTitle title={"Project KKP"} />
      <PageTitle title={"title 2"} />
      Article 1 Raiting
      <Rating value={2} />
      <Accordion title={"Menu Accordion 1"} />
      <Accordion title={"Menu Accordion 2"} />
      Article 2 Raiting
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

function PageTitle(props: any) {
  return <h1>{props.title}</h1>
}

export default App;
