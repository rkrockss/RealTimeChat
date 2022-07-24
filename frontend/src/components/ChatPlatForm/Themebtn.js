import React from 'react'
import { useState } from 'react';
import { BsSunFill,BsFillMoonFill } from "react-icons/bs";

const Themebtn = () => {

    const [toggle, settoggle] = useState( "false" )
    const handletoggle =()=>{
          settoggle(!toggle)
    }

  return (
    <div onClick={handletoggle } className=' msger-header-title' >
        
    { toggle ?   <BsFillMoonFill /> :<BsSunFill size={19}/>}


    </div>
  )
}

export default Themebtn