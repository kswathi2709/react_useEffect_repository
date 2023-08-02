import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import FormData from './FormData';
import ListComp from './ListComp';
import Table from './Table';


function App() {
  
  const api_url="https://jsonplaceholder.typicode.com/"
  const [items,setItems]=useState([])
  const [reqType,setReqType]=useState('users')
 
  useEffect(()=>{
      const fetchItems=async()=>{
        try{
          const response= await fetch(`${api_url}${reqType}`)
          console.log(response)
          if(!response.ok) throw new Error("Error: Data Not Received")
          
           const listItems= await response.json()
           console.log(listItems)
           setItems(listItems)
        }catch(err){
            console.log(err.Message)
           } 
      }
      fetchItems()
  },[reqType])


  return (
    <div className="App">
     <FormData reqType={reqType} setReqType={setReqType} />
     <ListComp items={items}/>
     {/* <Table items={items} /> */}

    </div>
  );
}

export default App;
