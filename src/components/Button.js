import './Button.css';
import { useState } from 'react';

function Counter(){
        const [result, setResult] = useState("");

        const clickHandler=(event) =>{
            setResult(result.concat(event.target.value));
        }
        
         const clearHandler=() =>{
            setResult('');
         }
         const calculate=() =>{
            setResult(eval(result).toString());
         }
         
    return (
        <div className='calc'>
        <input type="text" placeholder='0' className='answer' value={result}/>
        <input type="button" value='9' id='answer'  onClick={clickHandler}/>
        <input type="button" value='8' id='answer' onClick={clickHandler}/>
        <input type="button" value='7' id='answer' onClick={clickHandler}/>
        <input type="button" value='6' id='answer' onClick={clickHandler}/>
        <input type="button" value='5' id='answer' onClick={clickHandler}/>
        <input type="button" value='4' id='answer' onClick={clickHandler}/>
        <input type="button" value='3' id='answer' onClick={clickHandler}/>
        <input type="button" value='2' id='answer' onClick={clickHandler}/>
        <input type="button" value='1' id='answer' onClick={clickHandler}/>
        <input type="button" value='0' id='answer' onClick={clickHandler}/>
        <input type="button" value='.' id='answer' onClick={clickHandler}/>
        <input type="button" value='+' id='answer' onClick={clickHandler}/>
        <input type="button" value='-' id='answer' onClick={clickHandler}/>
        <input type="button" value='*' id='answer' onClick={clickHandler}/>
        <input type="button" value='%' id='answer' onClick={clickHandler}/>
        <input type="button" value='/' id='answer' onClick={clickHandler}/>
        <input type="button" value='clear' id='button1' onClick={clearHandler}/>
        <input type="button" value='=' id='button1'  onClick={calculate}/>
        </div>);}
export default Counter;