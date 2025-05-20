import { useState } from 'react'
import Todo from './components/Todo';
import Header from './components/Header';
import "./App.css";
//import InlineComponent from './components/InlineComponent';
//import OutLineComponent from './components/OutLineComponent';

function App() {
  return (
    <div className="App">
      <Header/>
      <Todo/>
     
      </div>
  )
}

export default App
