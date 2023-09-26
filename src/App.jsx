import React, { useState } from 'react';
import './App.css';
import ReactJSX, {ReactNoJSX} from './components/ReactJsx'; 
import CompAndProps from './components/compAndProps';
import Button from './feature/Button';
import TextInput from './feature/TextInput';

function App() {
  const [text, setText] = useState("");
  const handleSubmit = (event) => {
      event.preventDefault();
      setText(event.target[0].value);
    };
  
  return (
    <div className="App">
      <header className="App-header">
        <ReactJSX />
        <ReactNoJSX />
        <div className="Components"> <CompAndProps bgColor="#66ccff"/>
        <form onSubmit={handleSubmit}>
          <TextInput border="red" placeholder="Ketik kata atau tulisan"/>
          <Button type="submit"background="blue">Kirim</Button>
        </form>
          <p >Kata atau tulisan yang anda ketik adalah: {text}</p>
        </div>
      </header>
    </div>
); 
}
export default App;
