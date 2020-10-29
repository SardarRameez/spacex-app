import React, { useState } from 'react';
import './App.css';
import { Mission } from './components/Mission/Mission';
import { MissionDetails } from './components/MissionDetails/MissionDetails';

function App() {
  let [id, setId]=useState("16")
  function handleId(newId:string){
    setId(newId)
  }
  return (
    <div className="app">
      <Mission callback={handleId}></Mission>
      <MissionDetails id={id}></MissionDetails> 
    </div>
  );
}

export default App;
