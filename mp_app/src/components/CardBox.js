import { useState } from "react";



export const CardBox = ({children,imp}) => {

    const [show,setShow]=useState(true);

  return (
    <div  className={`box ${imp}`} >
        {children} 
        <button onClick={()=>setShow(!(show))}>Hide</button>
    </div>
  )
}
