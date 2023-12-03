import { useState } from "react";

const [show,setShow] =useState(true);

export const CardBox = ({children,imp}) => {
  return (
    <div className={`box ${imp}`} >
        {children} 
        <button>Hide</button>
    </div>
  )
}
