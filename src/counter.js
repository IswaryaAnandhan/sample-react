import { useState } from "react"

export default function Counter(){
    const [counter,setcounter]= useState(0)
    return <div>
        <button onClick={()=>{
            setcounter(counter+1)
        }}>+</button>
        <h1>{counter}</h1>
        <button onClick={()=>{
            if(counter!==0){
                setcounter(counter-1)
            } 
          
        }}>-</button>
        <button onClick={()=>{
               setcounter(0)
        }
            
        }>Reset</button>

    </div>
}
