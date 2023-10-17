import React from 'react'
import {CgProfile,CgMoreR} from 'react-icons/cg'
import {BsCircleFill} from 'react-icons/bs'

const Statuscard = ({id,title,tag}) => {
  return (
    <div style={{backgroundColor:"white",margin:"8px",borderRadius:"10px",height:"100px",position:"relative",width:"100%"}}>
       <div style={{display:"flex", justifyContent: "space-between" ,padding:"2px",alignItems:"center" }}>
        <h3 style={{marginLeft:"5px", color:"grey" ,fontSize:"15px"}}>{id}</h3>
     <CgProfile style={{marginRight:"3px",fontWeight:"bold",fontSize:""}}/>
       </div>
       <div >
        <h3 style={{marginTop:"4px",marginLeft:"2px",marginRight:"2px", fontSize:"15px",fontWeight:"800"}}>{title}</h3>
       </div>
       <div style={{display:"flex",justifyContent:"center", position:"absolute",bottom:"1px",left:"35px"}}><CgMoreR style={{color:"grey",marginRight:"19px"}}/>
       <BsCircleFill style={{color:"grey",marginRight:"4px"}}/> {tag}
       </div>

    </div>
  )
}

export default Statuscard