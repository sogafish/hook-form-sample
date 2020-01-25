import React from 'react';
import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';
import Form3 from './components/Form3';


const App: React.FC = () => {
  return (
    <div className="App">
      <Form1 />
      <Form2 />
      <Form3 />
    </div>
  );
}

export default App;
