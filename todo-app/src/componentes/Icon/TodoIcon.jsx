import React from 'react'
//import { ReactComponent   as CheckSVG} from "../assets/check.svg"
//import { ReactComponent   as DeleteSVG} from "../assets/delete.svg"
import { FiCheck } from "react-icons/fi";


function TodoIcon({type}) {
  return (
   <span 
        className={`Icon Icon-svg Icon-${type}`}>
           <FiCheck />
    </span> 


  )
}


export {TodoIcon}