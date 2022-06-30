import React from 'react';
import {useState} from "react";
import "./App.css";


function App() {
  
  // const [num,setNum]=useState(0);
  // const [textValue,setTextValue]=useState("");
  // const [myList,setList]=useState([]);

  const [List,setList]=useState([]);
  const [currentTask,setCurrenttask]=useState();


  let addItem=()=>{
    setList([...List,{id:List.length-1,name:currentTask,isDone:false}]);
    // setCurrenttask("");

  }

  let markDone=(id)=>{
    let itemId=List.findIndex((obj)=>obj.id===id);
    List[itemId].isDone=List[itemId].isDone?false:true;
    setList([...List]);

  }

  // let unDone=(id)=>{
  //   let itemId=List.findIndex((obj)=>obj.id===id);
  //   List[itemId].isDone=List[itemId].isDone?true:false;
  //   setList([...List]);

  // }
  let Delete=(id)=>{
    let itemId=List.findIndex((obj)=>obj.id==id);
    List.splice(itemId,1);
    setList([...List]);
  }

  return (
        <div className='center'> 

          {/* {num} */}
          {/* <button onClick={()=>setNum(num+1)}>inc</button> */}
          <input type="text" onChange={(n)=>setCurrenttask(n.target.value)}></input>
          {/* <label>{textValue}</label> */}
          <button onClick={addItem}>Add Cart</button>
              <ul>
              {List.map((input)=>{
                return <li className={input.isDone?'mark-Done':''}>{input.name} <button onClick={()=>markDone(input.id)}>Done</button><button onClick={()=>Delete(input.id)}>Delete</button></li>;
              })}
            </ul>    

        </div>
        
    
  )
}

export default App;