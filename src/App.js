import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Content from './Content';
import ContentNew from './ContentNew';
import {useState} from 'react';


function App() {
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
    <div className="App">
    <h1>TEST</h1>
    <Header title="Balamurugan"/>
    {/* <Content /> */}
    <ContentNew 
    items={items}
    handleCheck={handleCheck}
    clickRemoval={clickRemoval}
  />

    <Footer length={items.length}/>

    </div>
  );
}

export default App;
