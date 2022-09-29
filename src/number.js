import { useState } from "react"


export default function Number(){
    const [width,setwidth]= useState(100)
  return <div>
        <input type="number" value={width}
        onChange={(e)=>{
                setwidth(e.target.value)
        }}/>
        <div style={{width:`${width}px`,height:'100px',backgroundColor:'wheat'}}>

        </div>
    </div>
}