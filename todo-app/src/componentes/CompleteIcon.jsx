import React from 'react'
import {TodoIcon} from "./TodoIcon"
import {RxCheck} from 'react-icons/rx'
function CompleteIcon(props) {
    const {className, onClick} = props
  return (
    <RxCheck
    className={className}
    onClick={onClick}
    />
  )
}

export {CompleteIcon}