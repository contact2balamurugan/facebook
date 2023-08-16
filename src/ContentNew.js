import React from 'react';
import {useState} from 'react';
import {FaTrashAlt} from 'react-icons/fa';
const ContentNew=()=>{
    const [items,setItems]=useState(
        [
            { id:1, checked:true, item:'Pongal' },
            { id:2, checked:false,item:'Poori'  },
            { id:3, checked:true, item:'Vadai'  }
        ]
        )
    function handleCheck(id,status){
        const newChanges=items.map((item)=>item.id===id?{...item,checked:!item.checked}:item)
        setItems(newChanges)
    }

    function clickRemoval(id){
        const updatedArray = items.filter(item => item.id !== id);
        setItems(updatedArray);
    }
    return (
        <main>
            {items.length>0?
        <ul>
            {items.map((item)=>(
                <li >
                    <input type="checkbox" onChange={()=>handleCheck(item.id,item.checked)} checked={item.checked}/>
                    <label onClick={()=>handleCheck(item.id,item.checked)}>{item.item}</label> 
                    <FaTrashAlt role="button" onClick={()=>clickRemoval(item.id)}tabIndex="0"/>
                </li>
            ))}
        </ul>:<p>"No data to display"</p>}
        </main>
        )
}
export default ContentNew