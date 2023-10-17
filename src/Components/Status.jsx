import React from "react";
import "./style.css";
import {TbProgressBolt} from 'react-icons/tb';
import {BsThreeDots} from 'react-icons/bs'
import {AiOutlinePlus,AiOutlineCheckCircle} from 'react-icons/ai'
 import {MdOutlineCancel,MdOutlineSmsFailed} from 'react-icons/md'
 import {BsCircle} from 'react-icons/bs'
import Statuscard from "./Statuscard";
const Status = ({ tickets }) => {
  let todo = [];
  let backlogs = [];
  let cancelled = [];
  let done = [];
  let inprogress = [];
  for (let i = 0; i < tickets.length; i++) {
    if (tickets[i].status === "In progress") {
      inprogress.push(tickets[i]);
    } else if (tickets[i].status === "Todo") {
      todo.push(tickets[i]);
    } else if (tickets[i].status === "Backlog") {
      backlogs.push(tickets[i]);
    } else if (tickets[i].status === "Done") {
      done.push(tickets[i]);
    } else if (tickets[i].status === "Cancelled") {
      cancelled.push(tickets[i]);
    }
  }
  return (
    <div className="status">
      <div style={{marginLeft:"8px",marginRight:"8px"}} >
        <div style={{display:"flex", justifyContent:" space-between",marginBottom:"18px",marginTop:"8px"}}> <div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><MdOutlineSmsFailed style={{marginRight:"7px",color:"blue"}}/> <h3>Backlogs  {backlogs.length}</h3></div> <div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><AiOutlinePlus/> <BsThreeDots style={{marginLeft:"20px"}}/></div></div>
        
          {backlogs.length===0?"":<div>{backlogs.map((buser)=>(<Statuscard key={buser.id} id={buser.id} title={buser.title} tag={buser.tag[0]}/>))}</div>}
        
      </div>
      <div className="s2"  style={{marginLeft:"8px",marginRight:"8px"}}>
      <div style={{display:"flex", justifyContent:" space-between",marginBottom:"18px",marginTop:"8px"}}><div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><BsCircle style={{marginRight:"7px",color:"grey"}}/><h3 >Todo  {todo.length}</h3></div><div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><AiOutlinePlus/> <BsThreeDots style={{marginLeft:"20px"}}/></div></div>
      {todo.length===0?"":<div>{todo.map((buser)=>(<Statuscard key={buser.id} id={buser.id} title={buser.title} tag={buser.tag[0]}/>))}</div>}
      </div>
      <div className="s3"  style={{marginLeft:"8px",marginRight:"8px"}}>
      <div style={{display:"flex", justifyContent:" space-between",marginBottom:"18px",marginTop:"8px"}}><div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><TbProgressBolt style={{marginRight:"7px",color:"orange"}}/><h3 >In Progress {inprogress.length}</h3></div> <div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><AiOutlinePlus/> <BsThreeDots style={{marginLeft:"20px"}}/></div></div>
      {inprogress.length===0?"":<div>{inprogress.map((buser)=>(<Statuscard key={buser.id} id={buser.id} title={buser.title} tag={buser.tag[0]}/>))}</div>}
      </div>
      <div  className="s4"  style={{marginLeft:"8px",marginRight:"8px"}}>
      <div style={{display:"flex", justifyContent:" space-between",marginBottom:"18px",marginTop:"8px"}}><div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><AiOutlineCheckCircle style={{marginRight:"7px",color:"green"}} /><h3>Done  {done.length}</h3></div> <div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><AiOutlinePlus/> <BsThreeDots style={{marginLeft:"20px"}}/></div></div>
      {done.length===0?"":<div>{done.map((buser)=>(<Statuscard key={buser.id} id={buser.id} title={buser.title} tag={buser.tag[0]}/>))}</div>}
      </div>
      <div  className="s5"  style={{marginLeft:"8px",marginRight:"8px"}}>
      <div style={{display:"flex", justifyContent:" space-between",marginBottom:"18px",marginTop:"8px"}}><div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><MdOutlineCancel style={{marginRight:"7px",color:"red"}}/><h3 >Cancelled   {cancelled.length}</h3></div> <div style={{display:"flex", justifyContent:" space-between",alignItems:"center"}}><AiOutlinePlus/> <BsThreeDots style={{marginLeft:"20px"}}/></div></div>
      {cancelled.length===0?"":<div>{cancelled.map((buser)=>(<Statuscard key={buser.id} id={buser.id} title={buser.title} tag={buser.tag[0]}/>))}</div>}
      </div>
    </div>
  );
};

export default Status;
