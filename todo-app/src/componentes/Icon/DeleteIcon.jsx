import React from 'react'
//import {TodoIcon} from "./TodoIcon"
import {TodoIcon} from "../Icon/TodoIcon"
import {RxCross1} from 'react-icons/rx'

function DeleteIcon(props) {
    const {className, onClick} = props
  return (
    <RxCross1
        className={className}
        onClick={onClick}
    />
  )
}
export {DeleteIcon}