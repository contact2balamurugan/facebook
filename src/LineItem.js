import React from 'react'
import {FaTrashAlt} from 'react-icons/fa';


export const LineItem = ({item,handleCheck,clickRemoval}) => {
  return (
    <li >
    <input type="checkbox" onChange={()=>handleCheck(item.id,item.checked)} checked={item.checked}/>
    <label onClick={()=>handleCheck(item.id,item.checked)}>{item.item}</label> 
    <FaTrashAlt role="button" onClick={()=>clickRemoval(item.id)}tabIndex="0"/>
</li>
  )
}