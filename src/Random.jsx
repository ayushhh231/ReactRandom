 import { useState } from "react";
 function Random() {
     const [value, setValue] = useState(5);
   const [minVal,setMinVal] = useState(1);
   const [maxVal,setMaxVal] = useState(10);
 
   const randomValue = () =>
      setValue(Math.floor(Math.random()*(maxVal-minVal + 1)+ minVal));
 
   function handleMax(event) {
     setMaxVal(+event.target.value);
   }
   function handleMin(event){
     setMinVal(+event.target.value)
   }

   
    return(
    <>
    <div className="container">
      <div className="random-number">
        <p>Random Number : {value}</p>
      </div>
      <div className="min-max">
        Min Val: 
        <br />
        <input type="number" value={minVal} onChange={handleMin}/>
        Max Val:
        <br />
        <input type="number" value={maxVal} onChange={handleMax}/>
      </div> <br />
      <button id='random-click' onClick={randomValue}>Get Random Number</button>
      </div>
    </>
    )}

 export default Random;