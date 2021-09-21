import { useState } from 'react';
import Container from './container';
import Button from './button';
import './App.css';


function App() {
  const[result, setResult] = useState("");
  const[value, setValue] = useState("");

  const clickHandler = (a) => {
    const newarr =result.concat(a.target.name);
    setResult(newarr);
    setValue("");
  }

  const clear = () => {
    setResult("");
    setValue("");
  }
  const calculate = () => {
    setValue(result);
    setResult(eval(result).toString());
  }
  

  return (
    
    <Container className="container">
      <input type="text" value={value} className="input-1"></input>
    <input type="text" value={result} className="input"></input>
    <hr />
    <table className="keypad">

      <tr>
     
        <td><Button value="C" onClick={clear} name="C" className="button highlight-1"/></td>
        <td><Button value="+/-" onClick={clickHandler} name="+/-" className="button highlight-1" /></td>
        <td><Button value="%" onClick={clickHandler} name="%" className="button highlight-1" /></td>
        <td><Button value="/" onClick={clickHandler} name="/" className="button highlight-3" /></td>
      </tr>
      <tr>
        <td><Button value="1" onClick={clickHandler} name="1"  className="button highlight"/></td>
        <td><Button value="2" onClick={clickHandler} name="2" className="button highlight" /></td>
        <td><Button value="3" onClick={clickHandler} name="3" className="button highlight" /></td>
        <td><Button value="X" onClick={clickHandler} name="*" className="button highlight-3" /></td>
      </tr>
      <tr>
        <td><Button value="4" onClick={clickHandler} name="4"  className="button highlight"/></td>
        <td><Button value="5" onClick={clickHandler} name="5"  className="button highlight"/></td>
        <td><Button value="6" onClick={clickHandler} name="6"  className="button highlight"/></td>
        <td><Button value="-" onClick={clickHandler} name="-"  className="button highlight-3"/></td>
      </tr>
      <tr>
        <td><Button value="7" onClick={clickHandler} name="7"  className="button highlight"/></td>
        <td><Button value="8" onClick={clickHandler} name="8"  className="button highlight"/></td>
        <td><Button value="9" onClick={clickHandler} name="9"  className="button highlight"/></td>
        <td><Button value="+" onClick={clickHandler} name="+"  className="button highlight-3"/></td>
      </tr>
      <tr>
        <td><Button value="00" onClick={clickHandler} name="00"  className="button highlight"/></td>
        <td><Button value="0" onClick={clickHandler} name="0"  className="button highlight"/></td>
        <td><Button value="," onClick={clickHandler} name="," className="button highlight" /></td>
        <td><Button value="=" onClick={calculate} name="="  className="button highlight-2"/></td>
      </tr>
    </table>
    </Container>
    
  )
}

export default App;
