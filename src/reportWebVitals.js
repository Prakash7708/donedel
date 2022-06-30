// import React from 'react';
// import {useState} from "react";


function App() {

  const [num,setNum]=useState(0);
  const [textValue,setTextValue]=useState("");
  const [myList,setList]=useState([]);

  let addItem=()=>{
    setList([...myList,{name:textValue}]);
  }

  return (
        <div> 

          {/* {num} */}
          {/* <button onClick={()=>setNum(num+1)}>inc</button> */}
           <input type="text" onChange={(n)=>setTextValue(n.target.value)}></input>
          {/* <label>{textValue}</label> */}
          <button onClick={addItem}>Add Cart</button>
              <ul>
              {myList.map((input)=>{
                return <li>{input.name}</li>;
              })}
            </ul>    

        </div>
    
  )
}

// export default App;