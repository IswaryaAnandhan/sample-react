import { useState } from "react";

export default function Click(){
    const [counter,setcounter]= useState([])
    return <div>
        <button onClick={()=>{
            setcounter([...counter,{count: counter.length+ 1}])
        }}>
            Add
            </button>
       {
         counter.map((count)=>{
            return  (
            <div style={{width:'100px', height:'25px',backgroundColor:'lightpink',marginBottom:'8px'}}>
              {count.count}
            </div>)
         })
       }
    
   
    </div>
}