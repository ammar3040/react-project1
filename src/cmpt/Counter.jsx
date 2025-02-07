import { useState } from "react";
function Counter(){
    const [count, setCounter] = useState(0);
return(
    <>
    <h2 style={{textAlign:"center"}}>Counter</h2>
    <p style={{textAlign:"center"}}>{count}</p>
    <button  onClick={()=>{
        setCounter(count+1);
    }}> increment</button>
          <button  onClick={()=>{
          setCounter(0);
      }}>reset</button>
      <button  onClick={()=>{
        setCounter(count-1);
    }}>decriment</button>
    </>
    
)


}
export default Counter