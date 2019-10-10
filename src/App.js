import React from 'react';
import './App.css';
import Header from "./components/header";
import Imagebox from "./components/imagebox";
import Year from "./components/Year";

const App =()=> {
  const filter = (type) => {
  }
  const addType =()=>{
  }
  return (
    <section className="wrapper">
      <Header privacy={filter}/>
      <Imagebox filter={filter} addType={addType}/>
      <Year />
    </section>
  );
}

export default App;
