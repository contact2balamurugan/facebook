import React from 'react';
import ItemsList from './ItemsList';

const ContentNew=({items,handleCheck,clickRemoval})=>{
   
    return (
        <main>
            {items.length>0?
            <ItemsList
            items={items}
            handleCheck={handleCheck}
            clickRemoval={clickRemoval}
            />
      :<p>"No data to display"</p>}
        </main>
        )
}
export default ContentNew