import React, { useState } from 'react';
import './App.css';



function App() {
  
  let [val,update] = useState([]);
  let [id_val,id_update] = useState(0);
  let [text,textUpdate] = useState("");

function textChange(event){
  textUpdate(event.target.value);
}  

function add(){
  if(text !== ""){
  textUpdate("");
  id_update(prevValue=>prevValue+1);
  update((prevValue)=>{
   return [...prevValue, <div onClick={del} className="div-content " key={id_val}><i className="fas fa-trash-alt del" id={id_val} key={id_val}></i> {text}</div>];
    });
}
function del(event){
  if(event.target.id){
    update((prevValue)=>{
      prevValue = prevValue.map((elemnt)=>{
       if(event.target.id != elemnt.key){
         return elemnt;
       }
       else{
         return "";
       }
      });
      return prevValue;
    });
  }}
}


  return (
    <>
    <h1 style={{textAlign:"center"}} className="main">TO DO APP</h1>
    <div className = "box">
    <div className="add-box">
    <h1 className="entr">Entry</h1>
    <div className="add-bar" onClick={add}>
    <div className="entry-element">
    <input className="input-bar" type="text" onChange={textChange} value={text} placeholder="Entry Here..."/>
    <div className="entry-icon"><i className="fas fa-plus-circle main-icon"></i></div>
    </div>
    </div>
    {val}
    </div>
    </div>
    </>
  );
}

export default App;
