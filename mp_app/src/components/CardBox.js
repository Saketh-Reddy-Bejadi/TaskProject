import { useState } from "react";



export const CardBox = ({children,imp}) => {

    const [show,setShow]=useState(true);

  return (
    <div className={show?"":"disnone"} >
        <div  className={`box ${imp}`} >
          {children} 
          <button className="Hidebtn" onClick={()=>setShow(!(show))}>Hide</button>
        </div>
    </div>
  )
}
