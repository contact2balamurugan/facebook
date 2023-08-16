import React from 'react'
import { LineItem } from './LineItem'
const ItemsList = ({items,handleCheck,clickRemoval}) => {
  return (
    <ul>
    {items.map((item)=>(
       <LineItem
       item={item}
       key={item.id}
       handleCheck={handleCheck}
       clickRemoval={clickRemoval}
       />
    ))}
</ul>
  )
}

export default ItemsList