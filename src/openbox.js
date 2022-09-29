import { useState } from "react"

export default function Openbox(){
    const [showbox,setshowbox]= useState(false)
    return <div>
        <button onClick={()=>{
          showbox  ?  setshowbox(false) : setshowbox(true)  
        }}
        >{showbox ? 'Close' : 'Open'}</button>
        {
            showbox ?  <div 
            style={{width:'100px', height:'50px',backgroundColor:'skyblue',position:'absolute',top:'365px',left:'300px'}}></div>
   : null
        }
   </div>

}