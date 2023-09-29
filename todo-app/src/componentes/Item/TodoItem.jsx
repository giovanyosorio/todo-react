
//import {CompleteIcon} from "../Icon/CompleteIcon"
import {CompleteIcon} from "../Icon/CompleteIcon"
import {DeleteIcon} from "../Icon/DeleteIcon"
import React from 'react'
import "../../styles/TodoItem.css"


function TodoItem(props){
  const { text, completed, onComplete, onDelete } = props;

  return (
    <li className="TodoItem">

        <CompleteIcon
          className={`Icon -Icon-check ${completed && "Icon-check--active"}`}
          onClick={onComplete}
        />

      <p className={`TodoItem-p ${completed && "TodoItem-p--complete"}`}>{text}</p>
      
        <DeleteIcon className="Icon Icon-delete" onClick={onDelete} />
      
    </li>
  );
    }
export {
  TodoItem
}